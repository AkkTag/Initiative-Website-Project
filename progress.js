// =========================
// PROGRESS — lesson and unit completion
// =========================
//
// Stores which lessons are complete and unit-test results in localStorage,
// decorates the sidebar with progress marks, and appends a "Mark lesson
// complete" bar to the end of every lesson.
//
// Public API (window.Progress):
//   Progress.isLessonDone(unit, lesson)
//   Progress.completeLesson(unit, lesson, { silent })   fires "progress:lesson"
//   Progress.uncompleteLesson(unit, lesson)             fires "progress:lesson-undone"
//   Progress.lessonsDone(unit) / Progress.lessonTotal(unit) / Progress.allLessonsDone(unit)
//   Progress.unitResult(unit) -> { score, total, best, at } | null
//   Progress.completeUnit(unit, score, total)           fires "progress:unit"
//   Progress.reset()
//
// Celebrations listen for the events above (see celebrations.js).

(function () {

    const KEY = "starr.progress.v1";

    let data = load();

    function load() {
        try {
            const raw = localStorage.getItem(KEY);
            const parsed = raw ? JSON.parse(raw) : {};
            return { lessons: parsed.lessons || {}, units: parsed.units || {} };
        } catch (e) {
            return { lessons: {}, units: {} };
        }
    }

    function save() {
        try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }
    }

    function emit(name, detail) {
        document.dispatchEvent(new CustomEvent(name, { detail }));
    }

    const hasCourse = typeof courseData !== "undefined";
    const lessonKey = (unit, lesson) => unit + "|" + lesson;

    const Progress = {

        isLessonDone(unit, lesson) {
            return !!data.lessons[lessonKey(unit, lesson)];
        },

        lessonTotal(unit) {
            return hasCourse ? (courseData[unit]?.lessons.length || 0) : 0;
        },

        lessonsDone(unit) {
            if (!hasCourse || !courseData[unit]) return 0;
            return courseData[unit].lessons.filter(l => Progress.isLessonDone(unit, l)).length;
        },

        allLessonsDone(unit) {
            const total = Progress.lessonTotal(unit);
            return total > 0 && Progress.lessonsDone(unit) === total;
        },

        completeLesson(unit, lesson, opts = {}) {
            const key = lessonKey(unit, lesson);
            const wasNew = !data.lessons[key];

            data.lessons[key] = Date.now();
            save();

            const detail = {
                unit, lesson, wasNew,
                done: Progress.lessonsDone(unit),
                total: Progress.lessonTotal(unit),
                silent: !!opts.silent
            };

            emit("progress:lesson", detail);
            refreshAll();
            return detail;
        },

        uncompleteLesson(unit, lesson) {
            delete data.lessons[lessonKey(unit, lesson)];
            save();
            emit("progress:lesson-undone", { unit, lesson });
            refreshAll();
        },

        unitResult(unit) {
            return data.units[unit] || null;
        },

        completeUnit(unit, score, total) {
            const prev = data.units[unit];
            const best = Math.max(score, prev?.best ?? 0);

            data.units[unit] = { score, total, best, at: Date.now() };
            save();

            emit("progress:unit", { unit, score, total, best, perfect: score === total });
            refreshAll();
        },

        reset() {
            data = { lessons: {}, units: {} };
            save();
            emit("progress:reset", {});
            refreshAll();
        }
    };

    window.Progress = Progress;

    // =========================
    // Course page UI
    // =========================

    const lessonContent = document.querySelector(".lesson-content");
    if (!lessonContent || !hasCourse) return;

    const unitList = document.querySelector(".unit-list");
    const flyout = document.querySelector(".lesson-sidebar");

    // ---------- unit list: progress pill + bar ----------

    function refreshUnits() {
        if (!unitList) return;

        unitList.querySelectorAll(".unit").forEach(u => {
            const name = u.textContent.trim();
            const done = Progress.lessonsDone(name);
            const total = Progress.lessonTotal(name);

            u.classList.toggle("unit-done", !!Progress.unitResult(name));
            u.dataset.progress = total ? `${done}/${total}` : "";

            let bar = u.querySelector(".unit-bar");
            if (!bar) {
                bar = document.createElement("span");
                bar.className = "unit-bar";
                bar.setAttribute("aria-hidden", "true");
                u.appendChild(bar);
            }
            bar.style.setProperty("--p", total ? `${Math.round(done / total * 100)}%` : "0%");
        });
    }

    // ---------- lesson flyout: check marks + unit test entry ----------

    function refreshLessons() {
        if (!flyout) return;

        const items = flyout.querySelectorAll(".lesson[data-lesson]");
        items.forEach(div => {
            div.classList.toggle("lesson-done", Progress.isLessonDone(div.dataset.unit, div.dataset.lesson));
        });

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
            entry.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
            });

            flyout.appendChild(entry);
        }

        entry.dataset.unit = unit;

        const result = Progress.unitResult(unit);
        const done = Progress.lessonsDone(unit);
        const total = Progress.lessonTotal(unit);
        const hasTest = !!(window.Vocab && Vocab.pairsForUnit(unit).length >= 2);

        const status = !hasTest ? "Coming soon"
            : result ? `Best: ${result.best}/${result.total}`
            : Progress.allLessonsDone(unit) ? "Ready when you are!"
            : `${done}/${total} lessons done`;

        entry.classList.toggle("lesson-done", !!result);
        entry.classList.toggle("is-locked", !hasTest);
        entry.innerHTML = `<span class="lut-icon">${result ? "✓" : "★"}</span><span class="lut-text">Unit test<small>${status}</small></span>`;
    }

    // The flyout is rebuilt every time a unit is opened, so re-decorate after each rebuild.
    // (Runs synchronously: requestAnimationFrame is paused in background tabs.)
    if (flyout) {
        let refreshing = false;
        new MutationObserver(() => {
            if (refreshing) return;
            refreshing = true;
            try { refreshLessons(); } finally { refreshing = false; }
        }).observe(flyout, { childList: true });
    }

    // ---------- "Mark lesson complete" bar ----------

    function currentPos() {
        const unit = typeof currentUnit !== "undefined" ? currentUnit : null;
        const lesson = typeof currentLessonName !== "undefined" ? currentLessonName : null;
        if (!unit || !lesson || !courseData[unit]) return null;
        const index = courseData[unit].lessons.indexOf(lesson);
        return { unit, lesson, index };
    }

    function nextLessonOf(unit, index) {
        const lessons = courseData[unit].lessons;
        if (index + 1 < lessons.length) return { unit, index: index + 1 };
        const names = Object.keys(courseData);
        const nextUnit = names[names.indexOf(unit) + 1];
        if (nextUnit && courseData[nextUnit].lessons.length) return { unit: nextUnit, index: 0 };
        return null;
    }

    function formatDate(ts) {
        try { return new Date(ts).toLocaleDateString(undefined, { month: "short", day: "numeric" }); }
        catch (e) { return ""; }
    }

    function renderBar() {
        const body = document.querySelector(".lesson-body");
        const pos = currentPos();
        if (!body || !pos) return;

        let bar = body.querySelector(".lesson-complete-bar");
        if (!bar) {
            bar = document.createElement("div");
            bar.className = "lesson-complete-bar";
            body.appendChild(bar);
        }

        const done = Progress.isLessonDone(pos.unit, pos.lesson);
        const next = nextLessonOf(pos.unit, pos.index);

        bar.dataset.state = done ? "done" : "todo";

        if (!done) {
            bar.innerHTML = `
                <div class="lcb-text">
                    <strong>Finished reading?</strong>
                    <span>Mark this lesson complete to track your progress through ${pos.unit}.</span>
                </div>
                <button type="button" class="lcb-btn lcb-complete">Mark lesson complete</button>
            `;
            bar.querySelector(".lcb-complete").addEventListener("click", () => {
                Progress.completeLesson(pos.unit, pos.lesson);
            });
        } else {
            const at = data.lessons[lessonKey(pos.unit, pos.lesson)];
            bar.innerHTML = `
                <div class="lcb-done">
                    <span class="lcb-check" aria-hidden="true">✓</span>
                    <div class="lcb-text">
                        <strong>Lesson complete</strong>
                        <span>Finished ${formatDate(at)} · ${Progress.lessonsDone(pos.unit)} of ${Progress.lessonTotal(pos.unit)} lessons in ${pos.unit}</span>
                    </div>
                </div>
                <div class="lcb-actions">
                    ${next ? `<button type="button" class="lcb-btn lcb-next">Next lesson</button>` : ""}
                    <button type="button" class="lcb-btn ghost lcb-undo">Undo</button>
                </div>
            `;
            bar.querySelector(".lcb-next")?.addEventListener("click", () => {
                if (typeof closeLessonSidebar === "function") closeLessonSidebar();
                loadLesson(next.unit, next.index);
                lessonContent.scrollTo({ top: 0, behavior: "smooth" });
            });
            bar.querySelector(".lcb-undo").addEventListener("click", () => {
                Progress.uncompleteLesson(pos.unit, pos.lesson);
            });
        }
    }

    function refreshAll() {
        refreshUnits();
        refreshLessons();
        renderBar();
    }

    document.addEventListener("lesson:loaded", refreshAll);

    refreshAll();

})();
