// =========================
// PROGRESS — lesson and unit completion
// =========================
// Firestore is the source of truth for signed-in users. localStorage remains a
// per-browser cache for guests/offline display, but guest data is never merged
// into a signed-in account. Firestore Rules must restrict users/{uid}/appData.

(function () {
    const STORAGE_KEY = "starr.progress.v1";
    const userStorageKey = uid => `starr.progress.${uid}.v1`;
    const emptyState = () => ({ lessons: {}, units: {} });
    const lessonKey = (unit, lesson) => `${unit}|${lesson}`;
    const hasCourse = typeof courseData !== "undefined";
    let data = readLocal();
    let ready = Promise.resolve();
    let refreshUI = () => {};
    let authUser = null;
    let authGeneration = 0;

    function readLocal(key = STORAGE_KEY) {
        try {
            const parsed = JSON.parse(localStorage.getItem(key) || "{}");
            return { lessons: parsed.lessons || {}, units: parsed.units || {} };
        } catch (_) { return emptyState(); }
    }

    function writeLocal(state = data, user = authUser) {
        try { localStorage.setItem(user ? userStorageKey(user.uid) : STORAGE_KEY, JSON.stringify(state)); }
        catch (_) { /* storage may be unavailable */ }
    }

    function emit(name, detail) {
        document.dispatchEvent(new CustomEvent(name, { detail }));
    }

    async function persist() {
        writeLocal();
        const user = authUser || window.firebaseAuth?.currentUser;
        const db = window.firestoreDb;
        if (!user || !db) return;
        try {
            await db.collection("users").doc(user.uid).collection("appData").doc("progress")
                .set({ state: data, updatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
        } catch (error) {
            console.error("Could not save progress to Firestore:", error);
            emit("progress:sync-error", { error });
        }
    }

    const Progress = {
        isLessonDone(unit, lesson) { return !!data.lessons[lessonKey(unit, lesson)]; },
        lessonTotal(unit) { return hasCourse ? (courseData[unit]?.lessons.length || 0) : 0; },
        lessonsDone(unit) {
            if (!hasCourse || !courseData[unit]) return 0;
            return courseData[unit].lessons.filter(lesson => Progress.isLessonDone(unit, lesson)).length;
        },
        allLessonsDone(unit) {
            const total = Progress.lessonTotal(unit);
            return total > 0 && Progress.lessonsDone(unit) === total;
        },
        completeLesson(unit, lesson, opts = {}) {
            const key = lessonKey(unit, lesson);
            const wasNew = !data.lessons[key];
            data.lessons[key] = Date.now();
            persist();
            const detail = { unit, lesson, wasNew, done: Progress.lessonsDone(unit), total: Progress.lessonTotal(unit), silent: !!opts.silent };
            emit("progress:lesson", detail);
            refreshUI();
            return detail;
        },
        uncompleteLesson(unit, lesson) {
            delete data.lessons[lessonKey(unit, lesson)];
            persist();
            emit("progress:lesson-undone", { unit, lesson });
            refreshUI();
        },
        unitResult(unit) { return data.units[unit] || null; },
        completeUnit(unit, score, total) {
            const prev = data.units[unit];
            const best = Math.max(score, prev?.best ?? 0);
            data.units[unit] = { score, total, best, at: Date.now() };
            persist();
            emit("progress:unit", { unit, score, total, best, perfect: score === total });
            refreshUI();
        },
        reset() {
            data = emptyState();
            persist();
            emit("progress:reset", {});
            refreshUI();
        },
        totalCourseLessons() {
            if (!hasCourse) return 57;
            return Object.values(courseData).reduce((sum, unit) => sum + (unit.lessons?.length || 0), 0);
        },
        totalCourseLessonsDone() {
            if (!hasCourse) return Object.keys(data.lessons).length;
            return Object.keys(courseData).reduce((sum, unit) => sum + Progress.lessonsDone(unit), 0);
        },
        overallPercent() {
            const total = Progress.totalCourseLessons();
            return total ? Math.min(100, Math.round(Progress.totalCourseLessonsDone() / total * 100)) : 0;
        },
        async reload() {
            await ready;
            refreshUI();
            return data;
        },
        whenReady() { return ready; }
    };
    window.Progress = Progress;

    // Auth initialization finishes before the dashboard's first progress render.
    if (window.firebaseAuth) {
        ready = new Promise(resolve => {
            let firstAuthEvent = true;
            window.firebaseAuth.onAuthStateChanged(async user => {
                const generation = ++authGeneration;
                authUser = user || null;
                if (!user) {
                    data = readLocal();
                    refreshUI();
                    if (firstAuthEvent) { firstAuthEvent = false; resolve(data); }
                    return;
                }
                try {
                    const snapshot = await window.firestoreDb.collection("users").doc(user.uid)
                        .collection("appData").doc("progress").get();
                    if (generation !== authGeneration) return;
                    if (snapshot.exists && snapshot.data()?.state) {
                        const cloud = snapshot.data().state;
                        data = { lessons: cloud.lessons || {}, units: cloud.units || {} };
                    } else {
                        // Migrate this account's prior local cache only; never import guest/global data.
                        data = readLocal(userStorageKey(user.uid));
                        await persist();
                    }
                    writeLocal(data, user);
                } catch (error) {
                    console.error("Could not load progress from Firestore:", error);
                    data = readLocal(userStorageKey(user.uid));
                    emit("progress:sync-error", { error });
                }
                if (generation === authGeneration) refreshUI();
                if (firstAuthEvent) { firstAuthEvent = false; resolve(data); }
            }, error => {
                console.error("Could not determine Firebase sign-in state:", error);
                if (firstAuthEvent) { firstAuthEvent = false; resolve(data); }
            });
        });
    }

    // =========================
    // Course page progress UI
    // =========================
    const lessonContent = document.querySelector(".lesson-content");
    if (!lessonContent || !hasCourse) return;

    const unitList = document.querySelector(".unit-list");
    const flyout = document.querySelector(".lesson-sidebar");

    function refreshUnits() {
        if (!unitList) return;
        unitList.querySelectorAll(".unit").forEach(unitElement => {
            const name = unitElement.textContent.trim();
            const done = Progress.lessonsDone(name);
            const total = Progress.lessonTotal(name);
            unitElement.classList.toggle("unit-done", !!Progress.unitResult(name));
            unitElement.dataset.progress = total ? `${done}/${total}` : "";
            let bar = unitElement.querySelector(".unit-bar");
            if (!bar) {
                bar = document.createElement("span");
                bar.className = "unit-bar";
                bar.setAttribute("aria-hidden", "true");
                unitElement.appendChild(bar);
            }
            bar.style.setProperty("--p", total ? `${Math.round(done / total * 100)}%` : "0%");
        });
    }

    function refreshLessons() {
        if (!flyout) return;
        const items = flyout.querySelectorAll(".lesson[data-lesson]");
        items.forEach(item => item.classList.toggle("lesson-done", Progress.isLessonDone(item.dataset.unit, item.dataset.lesson)));
        const unit = items[0]?.dataset.unit;
        if (!unit) return;
        let entry = flyout.querySelector(".lesson-unit-test");
        if (!entry) {
            entry = document.createElement("div");
            entry.className = "lesson lesson-unit-test";
            entry.setAttribute("role", "option");
            entry.setAttribute("aria-selected", "false");
            entry.tabIndex = 0;
            const open = () => window.UnitTest?.start(entry.dataset.unit);
            entry.addEventListener("click", open);
            entry.addEventListener("keydown", event => {
                if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(); }
            });
            flyout.appendChild(entry);
        }
        entry.dataset.unit = unit;
        const result = Progress.unitResult(unit);
        const done = Progress.lessonsDone(unit);
        const total = Progress.lessonTotal(unit);
        const hasTest = !!(window.Vocab && Vocab.pairsForUnit(unit).length >= 2);
        const status = !hasTest ? "Coming soon" : result ? `Best: ${result.best}/${result.total}` : Progress.allLessonsDone(unit) ? "Ready when you are!" : `${done}/${total} lessons done`;
        entry.classList.toggle("lesson-done", !!result);
        entry.classList.toggle("is-locked", !hasTest);
        entry.innerHTML = `<span class="lut-icon">${result ? "✓" : "★"}</span><span class="lut-text">Unit test<small>${status}</small></span>`;
    }

    let lastLoadedPos = null;
    function currentPos() {
        if (lastLoadedPos && courseData[lastLoadedPos.unit]) return lastLoadedPos;
        const unit = typeof currentUnit !== "undefined" && currentUnit ? currentUnit : window.currentUnit;
        const lesson = typeof currentLessonName !== "undefined" && currentLessonName ? currentLessonName : window.currentLessonName;
        if (!unit || !lesson || !courseData[unit]) return null;
        return { unit, lesson, index: courseData[unit].lessons.indexOf(lesson) };
    }
    function nextLessonOf(unit, index) {
        const lessons = courseData[unit].lessons;
        if (index + 1 < lessons.length) return { unit, index: index + 1 };
        const names = Object.keys(courseData);
        const nextUnit = names[names.indexOf(unit) + 1];
        return nextUnit && courseData[nextUnit].lessons.length ? { unit: nextUnit, index: 0 } : null;
    }
    function formatDate(ts) {
        try { return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" }); }
        catch (_) { return ""; }
    }
    function renderBar() {
        const body = document.querySelector(".lesson-body");
        const pos = currentPos();
        if (!body || !pos) return;
        let bar = body.querySelector(".lesson-complete-bar");
        if (!bar) { bar = document.createElement("div"); bar.className = "lesson-complete-bar"; body.appendChild(bar); }
        const done = Progress.isLessonDone(pos.unit, pos.lesson);
        const next = nextLessonOf(pos.unit, pos.index);
        bar.dataset.state = done ? "done" : "todo";
        if (!done) {
            bar.innerHTML = `<div class="lcb-text"><strong>Finished reading?</strong><span>Mark this lesson complete to track your progress through ${pos.unit}.</span></div><button type="button" class="lcb-btn lcb-complete">Mark lesson complete</button>`;
            bar.querySelector(".lcb-complete").addEventListener("click", () => Progress.completeLesson(pos.unit, pos.lesson));
        } else {
            const at = data.lessons[lessonKey(pos.unit, pos.lesson)];
            bar.innerHTML = `<div class="lcb-done"><span class="lcb-check" aria-hidden="true">✓</span><div class="lcb-text"><strong>Lesson complete</strong><span>Finished ${formatDate(at)} · ${Progress.lessonsDone(pos.unit)} of ${Progress.lessonTotal(pos.unit)} lessons in ${pos.unit}</span></div></div><div class="lcb-actions">${next ? '<button type="button" class="lcb-btn lcb-next">Next lesson</button>' : ""}<button type="button" class="lcb-btn ghost lcb-undo">Undo</button></div>`;
            bar.querySelector(".lcb-next")?.addEventListener("click", () => {
                if (typeof closeLessonSidebar === "function") closeLessonSidebar();
                loadLesson(next.unit, next.index);
                lessonContent.scrollTo({ top: 0, behavior: "smooth" });
            });
            bar.querySelector(".lcb-undo").addEventListener("click", () => Progress.uncompleteLesson(pos.unit, pos.lesson));
        }
    }
    function refreshAll() { refreshUnits(); refreshLessons(); renderBar(); }
    refreshUI = refreshAll;

    document.addEventListener("lesson:loaded", event => {
        if (event.detail?.unit && event.detail?.lesson) lastLoadedPos = { ...event.detail };
        refreshAll();
    });
    if (flyout) {
        let refreshing = false;
        new MutationObserver(() => {
            if (refreshing) return;
            refreshing = true;
            try { refreshLessons(); } finally { refreshing = false; }
        }).observe(flyout, { childList: true });
    }
    refreshAll();
})();
