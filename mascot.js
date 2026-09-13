// =========================
// STARR — the mascot
// =========================
//
// A floating helper that lives in the bottom-right corner.
//
//   Navigation:  first-visit tour, "Where am I?", next-lesson prompts.
//   Learning:    vocab quiz built from the lesson's own vocab boxes,
//                heads-up on the lesson's "Common Starrfalls".
//
// Public API (window.Starr):
//   Starr.say(text, { pose, actions, duration, html })
//   Starr.pose(name, duration)      idle | wave | happy | think | oops | point-left | point-up | sleep
//   Starr.celebrate()
//   Starr.quiz()  Starr.whereAmI()  Starr.watchOut()  Starr.tour()
//   Starr.hide()  Starr.show()
//
// Listens for the "lesson:loaded" event dispatched by course-content.js.

(function () {

    // ---------- persisted state ----------

    const STORAGE_KEY = "starr.v1";

    const state = loadState();

    function loadState() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const parsed = raw ? JSON.parse(raw) : {};
            return {
                tourDone: parsed.tourDone || {},
                hidden: !!parsed.hidden
            };
        } catch (e) {
            return { tourDone: {}, hidden: false };
        }
    }

    function saveState() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) { /* storage unavailable — carry on */ }
    }

    // ---------- page detection ----------

    const lessonContent = document.querySelector(".lesson-content");
    const page = lessonContent ? "course" : "dashboard";

    const hasCourseGlobals =
        typeof courseData !== "undefined" &&
        typeof loadLesson === "function";

    // ---------- build the DOM ----------

    const root = document.createElement("div");
    root.className = "starr";
    root.dataset.pose = "idle";

    root.innerHTML = `
        <div class="starr-bubble" role="status" aria-live="polite">
            <button class="starr-bubble-close" type="button" aria-label="Close">&times;</button>
            <span class="starr-bubble-name">Starr</span>
            <div class="starr-bubble-text"></div>
            <div class="starr-bubble-actions"></div>
        </div>

        <div class="starr-menu" role="menu" aria-label="Starr menu">
            <button class="starr-menu-close" type="button" aria-label="Close">&times;</button>
            <div class="starr-menu-title">How can I help?</div>
            <div class="starr-menu-items"></div>
        </div>

        <button class="starr-body" type="button" aria-label="Starr, your study helper. Open menu." aria-haspopup="menu">
            <div class="starr-anim">
                ${starSvg()}
            </div>
            <div class="starr-shadow"></div>
        </button>
    `;

    const restore = document.createElement("button");
    restore.className = "starr-restore";
    restore.type = "button";
    restore.innerHTML = `${miniStarSvg()} Show Starr`;

    document.body.appendChild(root);
    document.body.appendChild(restore);

    const body = root.querySelector(".starr-body");
    const bubble = root.querySelector(".starr-bubble");
    const bubbleText = root.querySelector(".starr-bubble-text");
    const bubbleActions = root.querySelector(".starr-bubble-actions");
    const menu = root.querySelector(".starr-menu");
    const menuItems = root.querySelector(".starr-menu-items");

    function starSvg() {
        return `
        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <defs>
                <linearGradient id="starr-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stop-color="#6A4CF5"/>
                    <stop offset="1" stop-color="#2AD4E6"/>
                </linearGradient>
            </defs>

            <!-- sparkles (only visible in the happy pose) -->
            <g class="starr-sparkles" fill="#FDE68A">
                <path class="starr-sparkle" d="M14 18 l2.2 5.8 L22 26 l-5.8 2.2 L14 34 l-2.2-5.8 L6 26 l5.8-2.2Z"/>
                <path class="starr-sparkle" d="M88 12 l1.8 4.6 L94.4 18.4 l-4.6 1.8 L88 24.8 l-1.8-4.6 L81.6 18.4 l4.6-1.8Z"/>
                <path class="starr-sparkle" d="M92 58 l1.6 4 L97.6 63.6 l-4 1.6 L92 69.2 l-1.6-4 L86.4 63.6 l4-1.6Z"/>
            </g>

            <!-- body -->
            <polygon
                points="50,5 61.76,36.82 95.65,38.17 69.02,59.18 78.21,91.83 50,73 21.79,91.83 30.98,59.18 4.35,38.17 38.24,36.82"
                fill="url(#starr-grad)" stroke="url(#starr-grad)" stroke-width="6" stroke-linejoin="round"/>

            <!-- inner white outline, like the logo -->
            <polygon
                points="50,5 61.76,36.82 95.65,38.17 69.02,59.18 78.21,91.83 50,73 21.79,91.83 30.98,59.18 4.35,38.17 38.24,36.82"
                fill="none" stroke="white" stroke-width="2.6" stroke-linejoin="round" opacity=".95"
                transform="translate(50 56) scale(.78) translate(-50 -56)"/>

            <!-- cheeks -->
            <circle cx="36" cy="59" r="3.4" fill="#F9A8D4" opacity=".75"/>
            <circle cx="64" cy="59" r="3.4" fill="#F9A8D4" opacity=".75"/>

            <!-- eyes -->
            <g class="starr-eye">
                <ellipse cx="42" cy="50" rx="5" ry="6.2" fill="white"/>
                <g class="starr-pupil">
                    <circle cx="42.8" cy="51" r="2.7" fill="#1F2937"/>
                    <circle cx="44" cy="49.8" r=".9" fill="white"/>
                </g>
            </g>
            <g class="starr-eye">
                <ellipse cx="58" cy="50" rx="5" ry="6.2" fill="white"/>
                <g class="starr-pupil">
                    <circle cx="58.8" cy="51" r="2.7" fill="#1F2937"/>
                    <circle cx="60" cy="49.8" r=".9" fill="white"/>
                </g>
            </g>

            <!-- mouths (one shown per pose) -->
            <path class="starr-mouth starr-mouth-smile" d="M43 61 Q50 68 57 61" fill="none" stroke="#1F2937" stroke-width="2.3" stroke-linecap="round"/>
            <g class="starr-mouth starr-mouth-grin">
                <path d="M41 60 Q50 72 59 60 Z" fill="#1F2937"/>
                <ellipse cx="50" cy="66.5" rx="3.6" ry="2.2" fill="#FB7185"/>
            </g>
            <path class="starr-mouth starr-mouth-flat" d="M44.5 63.5 L55.5 62.5" fill="none" stroke="#1F2937" stroke-width="2.3" stroke-linecap="round"/>
            <ellipse class="starr-mouth starr-mouth-o" cx="50" cy="63.5" rx="3.2" ry="3.8" fill="#1F2937"/>

            <!-- zzz (sleep pose) -->
            <text class="starr-zzz" x="70" y="30" font-size="13">z</text>
            <text class="starr-zzz" x="80" y="19" font-size="10">z</text>
        </svg>`;
    }

    function miniStarSvg() {
        return `<svg viewBox="0 0 100 100" aria-hidden="true">
            <polygon points="50,5 61.76,36.82 95.65,38.17 69.02,59.18 78.21,91.83 50,73 21.79,91.83 30.98,59.18 4.35,38.17 38.24,36.82"
                fill="#6A4CF5" stroke="#6A4CF5" stroke-width="8" stroke-linejoin="round"/>
        </svg>`;
    }

    // ---------- helpers ----------

    const esc = (s) => String(s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---------- poses ----------

    let poseTimer = null;

    function pose(name, duration) {

        clearTimeout(poseTimer);

        // Re-applying the same pose must restart its CSS animation.
        root.dataset.pose = "idle";
        void root.offsetWidth;
        root.dataset.pose = name;

        if (duration) {
            poseTimer = setTimeout(() => {
                if (root.dataset.pose === name) root.dataset.pose = "idle";
            }, duration);
        }
    }

    // random blinking
    (function blinkLoop() {
        const wait = 2800 + Math.random() * 3200;
        setTimeout(() => {
            if (root.dataset.pose !== "sleep") {
                root.classList.add("is-blinking");
                setTimeout(() => root.classList.remove("is-blinking"), 160);
            }
            blinkLoop();
        }, wait);
    })();

    // nod off after a while with no activity, wake on the next input
    let sleepTimer = null;

    function armSleep() {
        clearTimeout(sleepTimer);
        sleepTimer = setTimeout(() => {
            if (!bubble.classList.contains("is-open") && !menu.classList.contains("is-open")) {
                pose("sleep");
            }
        }, 90000);
    }

    ["pointermove", "keydown", "pointerdown", "scroll"].forEach(evt => {
        document.addEventListener(evt, () => {
            if (root.dataset.pose === "sleep") pose("idle");
            armSleep();
        }, { passive: true, capture: true });
    });

    armSleep();

    // ---------- speech bubble ----------

    let bubbleTimer = null;

    function say(text, opts = {}) {

        clearTimeout(bubbleTimer);
        closeMenu();

        bubbleText.innerHTML = opts.html ? text : `<p>${esc(text)}</p>`;

        bubbleActions.innerHTML = "";
        (opts.actions || []).forEach(a => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "starr-btn" + (a.primary === false ? " ghost" : "");
            btn.textContent = a.label;
            btn.addEventListener("click", () => {
                if (a.keepOpen !== true) closeBubble();
                a.onClick && a.onClick();
            });
            bubbleActions.appendChild(btn);
        });

        bubble.setAttribute("role", opts.actions && opts.actions.length ? "dialog" : "status");

        bubble.classList.remove("is-open");
        void bubble.offsetWidth;
        bubble.classList.add("is-open");

        if (opts.pose) pose(opts.pose, opts.poseDuration || 2400);

        if (!opts.keepSpotlight) clearSpotlight();
        if (opts.target) spotlight(opts.target);

        const duration = opts.duration === undefined ? 7000 : opts.duration;
        if (duration > 0) {
            bubbleTimer = setTimeout(closeBubble, duration);
        }

        return bubble;
    }

    function closeBubble() {
        clearTimeout(bubbleTimer);
        bubble.classList.remove("is-open");
        bubbleActions.innerHTML = "";
        clearSpotlight();
        if (activeQuiz) activeQuiz = null;
    }

    root.querySelector(".starr-bubble-close").addEventListener("click", () => {
        closeBubble();
        if (tourActive) endTour();
    });

    // ---------- spotlight ----------

    function spotlight(target) {
        const el = typeof target === "string" ? document.querySelector(target) : target;
        if (el) el.classList.add("starr-spotlight");
    }

    function clearSpotlight() {
        document.querySelectorAll(".starr-spotlight").forEach(el => el.classList.remove("starr-spotlight"));
    }

    // ---------- celebration particles ----------

    function celebrate() {

        pose("happy", 2000);

        if (reducedMotion) return;

        const rect = body.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height * 0.35;

        const colors = ["#6A4CF5", "#2AD4E6", "#FDE68A", "#FB7185", "#34D399", "#A5B4FC"];

        for (let i = 0; i < 26; i++) {

            const p = document.createElement("span");
            p.className = "starr-particle";
            p.style.left = originX + "px";
            p.style.top = originY + "px";
            p.style.background = colors[i % colors.length];
            if (i % 3 === 0) p.style.borderRadius = "50%";

            document.body.appendChild(p);

            const angle = (-Math.PI / 2) + (Math.random() - 0.5) * Math.PI * 1.1;
            const dist = 90 + Math.random() * 150;
            const dx = Math.cos(angle) * dist;
            const dy = Math.sin(angle) * dist;
            const spin = (Math.random() - 0.5) * 720;

            p.animate([
                { transform: "translate(-50%,-50%) scale(1) rotate(0deg)", opacity: 1 },
                { transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(.9) rotate(${spin}deg)`, opacity: 1, offset: .6 },
                { transform: `translate(calc(-50% + ${dx * 1.1}px), calc(-50% + ${dy + 160}px)) scale(.4) rotate(${spin * 1.3}deg)`, opacity: 0 }
            ], {
                duration: 1100 + Math.random() * 500,
                easing: "cubic-bezier(.2,.8,.3,1)",
                fill: "forwards"
            }).onfinish = () => p.remove();
        }
    }

    // ---------- menu ----------

    function buildMenu() {

        const items = [];

        if (page === "course" && hasCourseGlobals) {
            items.push({ icon: "?", label: "Where am I?", hint: "Unit, lesson and section", run: whereAmI });
            items.push({ icon: "★", label: "Quiz me on this lesson", hint: "Key terms from the vocab boxes", run: quiz });
            items.push({ icon: "!", label: "Watch out for Starrfalls", hint: "Common mistakes in this lesson", run: watchOut });
        }

        items.push({ icon: "→", label: "Show me around", hint: "Replay the quick tour", run: tour });
        items.push({ icon: "×", label: "Hide Starr", hint: "Bring me back any time", run: hide, muted: true });

        menuItems.innerHTML = "";

        items.forEach(item => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.className = "starr-menu-item" + (item.muted ? " muted" : "");
            btn.setAttribute("role", "menuitem");
            btn.innerHTML = `<span class="icon">${esc(item.icon)}</span><span>${esc(item.label)}<small>${esc(item.hint)}</small></span>`;
            btn.addEventListener("click", () => {
                closeMenu();
                item.run();
            });
            menuItems.appendChild(btn);
        });
    }

    function openMenu() {
        clearTimeout(bubbleTimer);
        bubble.classList.remove("is-open");
        clearSpotlight();
        if (tourActive) endTour();

        menu.classList.add("is-open");
        body.setAttribute("aria-expanded", "true");
        pose("wave", 1300);

        const first = menu.querySelector(".starr-menu-item");
        if (first) first.focus();
    }

    function closeMenu() {
        menu.classList.remove("is-open");
        body.setAttribute("aria-expanded", "false");
    }

    body.addEventListener("click", () => {
        if (menu.classList.contains("is-open")) closeMenu();
        else openMenu();
    });

    root.querySelector(".starr-menu-close").addEventListener("click", closeMenu);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            if (menu.classList.contains("is-open")) { closeMenu(); body.focus(); }
            else if (bubble.classList.contains("is-open")) { closeBubble(); if (tourActive) endTour(); }
        }
    });

    document.addEventListener("click", (e) => {
        if (!root.contains(e.target) && menu.classList.contains("is-open")) closeMenu();
    });

    // ---------- hide / show ----------

    function hide() {
        closeBubble();
        closeMenu();
        root.classList.add("is-hidden");
        restore.classList.add("is-open");
        state.hidden = true;
        saveState();
    }

    function show() {
        root.classList.remove("is-hidden");
        restore.classList.remove("is-open");
        state.hidden = false;
        saveState();
        say("I'm back! Click me whenever you need a hand.", { pose: "wave", duration: 4500 });
    }

    restore.addEventListener("click", show);

    // ---------- course helpers ----------

    function currentPosition() {
        if (!hasCourseGlobals) return null;

        const unitName = typeof currentUnit !== "undefined" ? currentUnit : null;
        const lessonName = typeof currentLessonName !== "undefined" ? currentLessonName : null;
        if (!unitName || !lessonName || !courseData[unitName]) return null;

        const unit = courseData[unitName];
        const index = unit.lessons.indexOf(lessonName);

        return { unitName, unit, lessonName, index, count: unit.lessons.length };
    }

    function nextLesson() {
        const pos = currentPosition();
        if (!pos) return null;

        if (pos.index + 1 < pos.count) {
            return { unitName: pos.unitName, index: pos.index + 1, lessonName: pos.unit.lessons[pos.index + 1] };
        }

        const unitNames = Object.keys(courseData);
        const u = unitNames.indexOf(pos.unitName);
        const nextUnit = unitNames[u + 1];
        if (nextUnit && courseData[nextUnit].lessons.length) {
            return { unitName: nextUnit, index: 0, lessonName: courseData[nextUnit].lessons[0] };
        }

        return null;
    }

    function goTo(target) {
        if (!target) return;
        if (typeof closeLessonSidebar === "function") closeLessonSidebar();
        loadLesson(target.unitName, target.index);
        if (lessonContent) lessonContent.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    }

    function jumpToSection(id) {
        // Reuse the existing tab logic so the active tab and scroll offset stay in sync.
        const tab = document.querySelector(`.lesson-tabs .tab[href="#${id}"]`);
        if (tab) tab.click();
        else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    function activeSectionName() {
        const tab = document.querySelector(".lesson-tabs .tab.active");
        return tab ? tab.textContent.trim() : "Content";
    }

    function whereAmI() {
        const pos = currentPosition();
        if (!pos) {
            say("Pick a unit on the left to get started.", { pose: "point-left", target: ".unit-list", duration: 6000 });
            return;
        }

        const next = nextLesson();
        const actions = [];
        if (next) actions.push({ label: "Next lesson", onClick: () => goTo(next) });
        actions.push({ label: "Back to top", primary: false, onClick: () => lessonContent.scrollTo({ top: 0, behavior: "smooth" }) });

        say(`
            <p>You're in <strong>${esc(pos.unitName)}: ${esc(pos.unit.title)}</strong>,
            lesson ${pos.index + 1} of ${pos.count}.</p>
            <p><strong>${esc(pos.lessonName)}</strong> — you're on the <strong>${esc(activeSectionName())}</strong> section.</p>
        `, { html: true, pose: "think", actions, duration: 0 });
    }

    function watchOut() {
        const heads = [...document.querySelectorAll(".lesson-body #misconceptions h3")]
            .map(h => h.textContent.trim())
            .filter(Boolean);

        if (!heads.length) {
            say("No Starrfalls are listed for this lesson yet. You're safe for now!", { pose: "happy", duration: 6000 });
            return;
        }

        say(`
            <p>Common Starrfalls in this lesson:</p>
            <ul>${heads.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
        `, {
            html: true,
            pose: "think",
            duration: 0,
            actions: [
                { label: "Take me there", onClick: () => jumpToSection("misconceptions") },
                { label: "Got it", primary: false }
            ]
        });
    }

    // ---------- vocab quiz ----------
    // (extraction + question building live in vocab.js)

    let activeQuiz = null;

    function quiz() {
        const lessonBody = document.querySelector(".lesson-body");
        const pairs = lessonBody && window.Vocab ? Vocab.extractPairs(lessonBody) : [];

        if (!pairs.length) {
            say("This lesson doesn't have vocabulary boxes to quiz on yet. Try a lesson from Unit 1, 2 or 3!", {
                pose: "think", duration: 7000
            });
            return;
        }

        activeQuiz = { questions: Vocab.buildQuestions(pairs, 5), i: 0, score: 0 };
        renderQuestion();
    }

    function renderQuestion() {
        const q = activeQuiz;
        if (!q) return;

        const current = q.questions[q.i];

        say(`
            <div class="starr-quiz-head">
                <strong>Which term matches this?</strong>
                <span class="starr-quiz-progress">${q.i + 1} / ${q.questions.length}</span>
            </div>
            <div class="starr-quiz-def">${esc(current.masked)}</div>
            <div class="starr-choices">
                ${current.choices.map(c => `<button type="button" class="starr-choice">${esc(c)}</button>`).join("")}
            </div>
            <div class="starr-quiz-feedback"></div>
        `, { html: true, pose: "think", duration: 0 });

        const choices = [...bubbleText.querySelectorAll(".starr-choice")];
        const feedback = bubbleText.querySelector(".starr-quiz-feedback");

        choices[0]?.focus();

        choices.forEach(btn => {
            btn.addEventListener("click", () => {
                if (!activeQuiz) return;

                choices.forEach(b => b.disabled = true);

                const picked = btn.textContent;
                const correct = picked.toLowerCase() === current.term.toLowerCase();

                if (correct) {
                    q.score++;
                    btn.classList.add("is-correct");
                    feedback.className = "starr-quiz-feedback good";
                    feedback.textContent = "Correct!";
                    pose("happy", 1800);
                } else {
                    btn.classList.add("is-wrong");
                    choices.find(b => b.textContent.toLowerCase() === current.term.toLowerCase())?.classList.add("is-correct");
                    feedback.className = "starr-quiz-feedback bad";
                    feedback.textContent = `Not quite. It's "${current.term}".`;
                    pose("oops", 1400);
                }

                choices.forEach(b => {
                    if (!b.classList.contains("is-correct") && !b.classList.contains("is-wrong")) b.classList.add("is-dim");
                });

                const last = q.i + 1 >= q.questions.length;
                const nextBtn = document.createElement("button");
                nextBtn.type = "button";
                nextBtn.className = "starr-btn";
                nextBtn.textContent = last ? "See score" : "Next";
                nextBtn.addEventListener("click", () => {
                    if (last) finishQuiz();
                    else { q.i++; renderQuestion(); }
                });
                bubbleActions.appendChild(nextBtn);
                nextBtn.focus();
            });
        });
    }

    function finishQuiz() {
        const q = activeQuiz;
        if (!q) return;

        const total = q.questions.length;
        const ratio = q.score / total;
        const line = ratio === 1 ? "Perfect! You've got these down."
            : ratio >= .6 ? "Nice work! A quick re-read of the vocab boxes will lock in the rest."
            : "Good try! Scroll back up to the vocab boxes and give it another go.";

        activeQuiz = null;

        say(`
            <p><strong>Quiz complete</strong></p>
            <div class="starr-score">${q.score} / ${total}</div>
            <p>${esc(line)}</p>
        `, {
            html: true,
            duration: 0,
            actions: [
                { label: "Try again", onClick: quiz },
                { label: "Done", primary: false }
            ]
        });

        if (ratio >= .6) celebrate();
        else pose("think", 2000);
    }

    // ---------- tour ----------

    let tourActive = false;

    function tourSteps() {
        if (page === "course") {
            return [
                { text: "Hi, I'm Starr! I'll help you find your way around and check what you've learned.", pose: "wave" },
                { text: "Hover or click a unit here to see its lessons, then click a lesson to open it.", pose: "point-left", target: ".unit-list" },
                { text: "These tabs jump between the Content, Questions, Starrfalls and Ask Online sections of a lesson.", pose: "point-up", target: ".lesson-tabs" },
                { text: "Click me any time for a quick quiz, a heads-up on common mistakes, or to find out where you are.", pose: "happy" }
            ];
        }
        return [
            { text: "Hi, I'm Starr! Welcome to your dashboard.", pose: "wave" },
            { text: "Each card is a course. Open one to pick up where you left off.", pose: "point-up", target: ".course-card" },
            { text: "I'll be waiting inside the course to help you find your way around.", pose: "happy" }
        ];
    }

    function tour() {
        const steps = tourSteps();
        let i = 0;
        tourActive = true;

        const showStep = () => {
            const step = steps[i];
            const last = i === steps.length - 1;

            say(step.text, {
                pose: step.pose,
                target: step.target,
                duration: 0,
                actions: last
                    ? [{ label: "Got it!", onClick: endTour }]
                    : [
                        { label: "Next", keepOpen: true, onClick: () => { i++; showStep(); } },
                        { label: "Skip", primary: false, onClick: endTour }
                    ]
            });
        };

        showStep();
    }

    function endTour() {
        tourActive = false;
        clearSpotlight();
        state.tourDone[page] = true;
        saveState();
    }

    // ---------- reacting to the lesson ----------

    let sectionObserver = null;
    const tipped = { misconceptions: null, end: null };

    function watchSections() {
        if (page !== "course") return;

        sectionObserver?.disconnect();

        sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;

                const pos = currentPosition();
                const key = pos ? pos.unitName + "|" + pos.lessonName : "";

                if (tourActive || activeQuiz || menu.classList.contains("is-open")) return;

                if (entry.target.id === "misconceptions" && tipped.misconceptions !== key) {
                    tipped.misconceptions = key;
                    const n = entry.target.querySelectorAll("h3").length;
                    if (n) {
                        say(`Heads up: this lesson has ${n} common Starrfall${n === 1 ? "" : "s"}. Want the list?`, {
                            pose: "think",
                            duration: 8000,
                            actions: [{ label: "Show me", onClick: watchOut }, { label: "No thanks", primary: false }]
                        });
                    }
                }

                if (entry.target.id === "ask-online" && tipped.end !== key) {
                    tipped.end = key;
                    const next = nextLesson();
                    const hasVocab = !!document.querySelector(".lesson-body .vocab-box");
                    const canComplete = !!(window.Progress && pos && !Progress.isLessonDone(pos.unitName, pos.lessonName));
                    const actions = [];
                    if (canComplete) actions.push({ label: "Mark complete", onClick: () => Progress.completeLesson(pos.unitName, pos.lessonName) });
                    if (hasVocab) actions.push({ label: "Quiz me", primary: !canComplete, onClick: quiz });
                    if (next) actions.push({ label: "Next lesson", primary: !hasVocab && !canComplete, onClick: () => goTo(next) });

                    say(canComplete ? "You've reached the end of this lesson. Mark it complete?"
                        : next ? "You've reached the end of this lesson. Nice going!"
                        : "That's the last lesson available. Great work!", {
                        pose: "happy",
                        duration: 10000,
                        actions
                    });
                }
            });
        }, { threshold: 0.35 });

        document.querySelectorAll(".lesson-body #misconceptions, .lesson-body #ask-online")
            .forEach(s => sectionObserver.observe(s));
    }

    document.addEventListener("lesson:loaded", (e) => {
        watchSections();

        if (tourActive || activeQuiz) return;

        const { unit, lesson } = e.detail || {};
        const vocab = document.querySelectorAll(".lesson-body .vocab-box").length;
        const done = !!(window.Progress && Progress.isLessonDone(unit, lesson));

        say(done ? `Back on ${lesson}. You've already completed this one — nice!` : vocab
            ? `Now on ${lesson}. There are ${vocab} key term${vocab === 1 ? "" : "s"} in this one — ask me for a quiz when you're ready.`
            : `Now on ${lesson}. Let's go!`, {
            pose: "happy",
            duration: 6000
        });
    });

    // ---------- wire up "Ask Starr" toolbar button ----------

    [...document.querySelectorAll(".toolbar-btn")]
        .filter(b => b.textContent.trim() === "Ask Starr")
        .forEach(b => b.addEventListener("click", (e) => {
            e.stopPropagation(); // otherwise the document click handler closes the menu straight away
            openMenu();
        }));

    // ---------- init ----------

    buildMenu();
    watchSections();

    if (state.hidden) {
        root.classList.add("is-hidden");
        restore.classList.add("is-open");
    } else if (!state.tourDone[page]) {
        setTimeout(tour, 900);
    } else {
        setTimeout(() => say("Welcome back! Click me if you need anything.", { pose: "wave", duration: 4500 }), 700);
    }

    window.Starr = { say, pose, celebrate, quiz, whereAmI, watchOut, tour, hide, show, spotlight, clearSpotlight };

})();
