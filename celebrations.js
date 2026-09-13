// =========================
// CELEBRATIONS — milestone animations
// =========================
//
//   Celebrations.lesson({ unit, lesson })                lesson-complete overlay (confetti, progress ring)
//   Celebrations.unit({ unit, score, total })            grand unit-complete overlay (rays, badge, fireworks)
//   Celebrations.burst()                                 quick full-screen confetti pop, no card
//
// Listens for "progress:lesson" and "progress:unit" (see progress.js) so
// completing anything triggers the matching celebration automatically.

(function () {

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const COLORS = ["#6A4CF5", "#2AD4E6", "#FDE68A", "#FB7185", "#34D399", "#A5B4FC", "#F472B6", "#FFFFFF"];

    const esc = (s) => String(s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    // =========================
    // Canvas confetti engine
    // =========================

    class Confetti {

        constructor(canvas) {
            this.canvas = canvas;
            this.ctx = canvas.getContext("2d");
            this.particles = [];
            this.running = false;
            this.stopped = false;
            this.timers = [];
            this.last = 0;

            this.resize = this.resize.bind(this);
            this.tick = this.tick.bind(this);

            this.resize();
            window.addEventListener("resize", this.resize);
        }

        resize() {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            this.w = window.innerWidth;
            this.h = window.innerHeight;
            this.canvas.width = this.w * dpr;
            this.canvas.height = this.h * dpr;
            this.canvas.style.width = this.w + "px";
            this.canvas.style.height = this.h + "px";
            this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        }

        // x, y as fractions of the viewport (0..1). angle in degrees, 0 = right, -90 = up.
        burst({ x = .5, y = .5, count = 120, angle = -90, spread = 70, power = 14, shapes, gravity = .28, colors = COLORS } = {}) {
            const px = x * this.w;
            const py = y * this.h;
            const kinds = shapes || ["rect", "rect", "rect", "circle", "star", "streamer"];

            // Speeds are tuned for an ~800px-tall viewport; scale so bigger screens get the same reach.
            const scale = Math.max(.6, Math.min(1.8, this.h / 800));

            for (let i = 0; i < count; i++) {
                const a = (angle + (Math.random() - .5) * spread) * Math.PI / 180;
                const v = power * scale * (.45 + Math.random() * .75);
                const size = 5 + Math.random() * 7;

                this.particles.push({
                    x: px, y: py,
                    vx: Math.cos(a) * v,
                    vy: Math.sin(a) * v,
                    w: size,
                    h: size * (.5 + Math.random() * .8),
                    rot: Math.random() * Math.PI * 2,
                    vr: (Math.random() - .5) * .3,
                    flip: Math.random() * Math.PI * 2,
                    vflip: .15 + Math.random() * .2,
                    color: colors[Math.floor(Math.random() * colors.length)],
                    shape: kinds[Math.floor(Math.random() * kinds.length)],
                    life: 1,
                    decay: .006 + Math.random() * .008,
                    gravity: gravity * scale,
                    drag: .975 + Math.random() * .015,
                    wobble: Math.random() * Math.PI * 2,
                    wobbleSpeed: .08 + Math.random() * .1
                });
            }

            this.start();
        }

        // A rocket that rises then pops into a burst.
        firework({ x = .5, y = .3, count = 90, delay = 0 } = {}) {
            this.after(delay, () => {
                this.burst({ x, y: 1.02, count: 1, angle: -90, spread: 0, power: 0, shapes: ["trail"], gravity: 0 });
                const trail = this.particles[this.particles.length - 1];
                trail.target = y * this.h;
                trail.vy = -(this.h * (1.02 - y)) / 30;
                trail.onArrive = () => this.burst({ x, y, count, angle: -90, spread: 360, power: 13, gravity: .14 });
            });
        }

        // Gentle shower from the top edge.
        rain({ count = 60, duration = 2500, shapes = ["star", "rect", "circle"] } = {}) {
            const every = duration / count;
            for (let i = 0; i < count; i++) {
                this.after(i * every, () => this.burst({
                    x: Math.random(), y: -.03, count: 1,
                    angle: 90, spread: 40, power: 2.5, gravity: .05, shapes
                }));
            }
        }

        after(ms, fn) {
            const t = setTimeout(() => { if (!this.stopped) fn(); }, ms);
            this.timers.push(t);
        }

        start() {
            if (this.running || this.stopped) return;
            this.running = true;
            this.last = 0;
            requestAnimationFrame(this.tick);
        }

        stop() {
            this.stopped = true;
            this.running = false;
            this.timers.forEach(clearTimeout);
            window.removeEventListener("resize", this.resize);
        }

        tick(now) {
            if (this.stopped) return;

            // Time-based stepping (1 unit = one 60fps frame) so the motion looks the same on 60Hz and 144Hz screens.
            const dt = this.last ? Math.min(2.5, (now - this.last) / 16.67) : 1;
            this.last = now;

            const ctx = this.ctx;
            ctx.clearRect(0, 0, this.w, this.h);

            this.particles = this.particles.filter(p => {

                if (p.shape === "trail") {
                    p.y += p.vy * dt;
                    p.vy *= Math.pow(.985, dt);
                    if (p.y <= p.target || Math.abs(p.vy) < .4) { p.onArrive && p.onArrive(); return false; }
                    ctx.fillStyle = "rgba(255,255,255,.9)";
                    ctx.beginPath(); ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2); ctx.fill();
                    return true;
                }

                const drag = Math.pow(p.drag, dt);
                p.vx *= drag;
                p.vy = p.vy * drag + p.gravity * dt;
                p.wobble += p.wobbleSpeed * dt;
                p.x += (p.vx + Math.sin(p.wobble) * .6) * dt;
                p.y += p.vy * dt;
                p.rot += p.vr * dt;
                p.flip += p.vflip * dt;
                p.life -= p.decay * dt;

                if (p.life <= 0 || p.y > this.h + 30) return false;

                ctx.save();
                ctx.globalAlpha = Math.min(1, p.life * 1.6);
                ctx.translate(p.x, p.y);
                ctx.rotate(p.rot);
                ctx.fillStyle = p.color;

                if (p.shape === "circle") {
                    ctx.beginPath(); ctx.arc(0, 0, p.w / 2, 0, Math.PI * 2); ctx.fill();
                } else if (p.shape === "star") {
                    ctx.scale(1, Math.abs(Math.cos(p.flip)) * .7 + .3);
                    starPath(ctx, p.w * .8);
                    ctx.fill();
                } else if (p.shape === "streamer") {
                    ctx.scale(Math.abs(Math.cos(p.flip)) * .8 + .2, 1);
                    ctx.fillRect(-p.w * .2, -p.w * 1.6, p.w * .4, p.w * 3.2);
                } else {
                    ctx.scale(1, Math.abs(Math.cos(p.flip)));
                    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                }

                ctx.restore();
                return true;
            });

            if (this.particles.length || this.timers.length) requestAnimationFrame(this.tick);
            else this.running = false;
        }
    }

    function starPath(ctx, r) {
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
            const rad = i % 2 ? r * .45 : r;
            const a = -Math.PI / 2 + i * Math.PI / 5;
            ctx.lineTo(Math.cos(a) * rad, Math.sin(a) * rad);
        }
        ctx.closePath();
    }

    // =========================
    // Overlay plumbing
    // =========================

    let current = null;

    function open(kind, inner, { onAction } = {}) {

        if (current) current.close(true);

        const el = document.createElement("div");
        el.className = `cele cele-${kind}`;
        el.innerHTML = `
            <canvas class="cele-canvas" aria-hidden="true"></canvas>
            ${kind === "unit" ? '<div class="cele-rays" aria-hidden="true"></div>' : ""}
            <div class="cele-card" role="dialog" aria-modal="true" tabindex="-1">${inner}</div>
        `;
        document.body.appendChild(el);

        const confetti = reducedMotion ? null : new Confetti(el.querySelector(".cele-canvas"));

        const onKey = (e) => { if (e.key === "Escape") close(); };
        document.addEventListener("keydown", onKey);

        el.addEventListener("click", (e) => {
            if (e.target === el || e.target.classList.contains("cele-canvas")) close();
        });

        el.querySelectorAll("[data-act]").forEach(btn => {
            btn.addEventListener("click", () => {
                const act = btn.dataset.act;
                close();
                if (act !== "close" && onAction) onAction(act);
            });
        });

        function close(immediate) {
            if (el.classList.contains("is-closing")) return;
            document.removeEventListener("keydown", onKey);
            confetti && confetti.stop();
            el.classList.add("is-closing");
            el.classList.remove("is-open");
            setTimeout(() => el.remove(), immediate ? 0 : 400);
            if (current && current.el === el) current = null;
        }

        requestAnimationFrame(() => {
            el.classList.add("is-open");
            setTimeout(() => el.querySelector(".cele-btn")?.focus(), 900);
        });

        current = { el, confetti, close };
        return current;
    }

    function countUp(el, from, to, { duration = 900, delay = 0, suffix = "" } = {}) {
        if (!el) return;
        if (reducedMotion) { el.textContent = to + suffix; return; }
        const t0 = performance.now() + delay;
        el.textContent = from + suffix;
        const step = (now) => {
            const t = Math.min(1, Math.max(0, (now - t0) / duration));
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = Math.round(from + (to - from) * eased) + suffix;
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    // Borrow the live mascot's face so the celebration star matches Starr exactly.
    function starMarkup({ crown = false } = {}) {
        const live = document.querySelector(".starr-anim svg");
        let svg;

        if (live) {
            svg = live.cloneNode(true);
            svg.querySelectorAll(".starr-zzz").forEach(n => n.remove());
        } else {
            svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            svg.setAttribute("viewBox", "0 0 100 100");
            svg.innerHTML = `<polygon points="50,5 61.76,36.82 95.65,38.17 69.02,59.18 78.21,91.83 50,73 21.79,91.83 30.98,59.18 4.35,38.17 38.24,36.82" fill="#6A4CF5" stroke="#6A4CF5" stroke-width="6" stroke-linejoin="round"/>`;
        }

        if (crown) {
            svg.insertAdjacentHTML("beforeend", `
                <g class="cele-crown">
                    <path d="M31 27 L39 7 L50 19 L61 7 L69 27 Z" fill="#FBBF24" stroke="#D97706" stroke-width="2.2" stroke-linejoin="round"/>
                    <circle cx="39" cy="7" r="2.6" fill="#FDE68A" stroke="#D97706" stroke-width="1.4"/>
                    <circle cx="61" cy="7" r="2.6" fill="#FDE68A" stroke="#D97706" stroke-width="1.4"/>
                    <circle cx="50" cy="19" r="2.2" fill="#FDE68A" stroke="#D97706" stroke-width="1.4"/>
                    <rect x="31" y="25" width="38" height="4.5" rx="2" fill="#F59E0B" stroke="#D97706" stroke-width="1.4"/>
                </g>
            `);
        }

        return svg.outerHTML;
    }

    // Split text into per-letter spans for the staggered "wobble in" title.
    function letters(text, startDelay = .6) {
        return [...text].map((ch, i) =>
            ch === " "
                ? `<span class="sp"> </span>`
                : `<span style="animation-delay:${(startDelay + i * .03).toFixed(2)}s">${esc(ch)}</span>`
        ).join("");
    }

    // ---------- course helpers ----------

    function nextLessonAfter(unit, lesson) {
        if (typeof courseData === "undefined" || !courseData[unit]) return null;
        const lessons = courseData[unit].lessons;
        const i = lessons.indexOf(lesson);
        if (i + 1 < lessons.length) return { unit, index: i + 1, label: lessons[i + 1] };
        const names = Object.keys(courseData);
        const nu = names[names.indexOf(unit) + 1];
        if (nu && courseData[nu].lessons.length) return { unit: nu, index: 0, label: courseData[nu].lessons[0] };
        return null;
    }

    function nextUnitAfter(unit) {
        if (typeof courseData === "undefined") return null;
        const names = Object.keys(courseData);
        const nu = names[names.indexOf(unit) + 1];
        return nu && courseData[nu].lessons.length ? nu : null;
    }

    function goToLesson(unit, index) {
        if (typeof loadLesson !== "function") return;
        if (typeof closeLessonSidebar === "function") closeLessonSidebar();
        loadLesson(unit, index);
        document.querySelector(".lesson-content")?.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
    }

    // =========================
    // Lesson complete
    // =========================

    function lesson({ unit, lesson }) {

        const P = window.Progress;
        const done = P ? P.lessonsDone(unit) : 1;
        const total = P ? P.lessonTotal(unit) : 1;
        const allDone = P ? P.allLessonsDone(unit) : false;
        const hasTest = !!(window.Vocab && Vocab.pairsForUnit(unit).length >= 2 && window.UnitTest);
        const next = nextLessonAfter(unit, lesson);

        const pctFrom = total ? Math.round(Math.max(0, done - 1) / total * 100) : 0;
        const pctTo = total ? Math.round(done / total * 100) : 100;

        const C = 2 * Math.PI * 42;

        const primary = allDone && hasTest
            ? `<button type="button" class="cele-btn" data-act="test">Start the unit test</button>`
            : next
                ? `<button type="button" class="cele-btn" data-act="next">Next lesson</button>`
                : "";

        const { el, confetti } = open("lesson", `
            <div class="cele-mascot" aria-hidden="true">${starMarkup()}</div>
            <div class="cele-kicker">Lesson complete</div>
            <h2 class="cele-title">${esc(lesson)}</h2>

            <div class="cele-stats">
                <div class="cele-ring" role="img" aria-label="${pctTo}% of ${esc(unit)} complete">
                    <svg viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                            <linearGradient id="cele-ring-grad" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stop-color="#6A4CF5"/>
                                <stop offset="1" stop-color="#2AD4E6"/>
                            </linearGradient>
                        </defs>
                        <circle class="bg" cx="50" cy="50" r="42"/>
                        <circle class="fg" cx="50" cy="50" r="42" style="stroke-dasharray:${C};stroke-dashoffset:${C * (1 - pctFrom / 100)}"/>
                    </svg>
                    <div class="cele-ring-label">
                        <strong class="cele-ring-val">${pctFrom}%</strong>
                        <small>${esc(unit)}</small>
                    </div>
                </div>
                <div class="cele-stat">
                    <strong class="cele-count">${Math.max(0, done - 1)}</strong>
                    <small>of ${total} lessons</small>
                </div>
            </div>

            ${allDone ? `<div class="cele-unlock">🎉 Every lesson in ${esc(unit)} is done.${hasTest ? " The unit test is unlocked!" : ""}</div>` : ""}

            <div class="cele-actions">
                ${primary}
                <button type="button" class="cele-btn ghost" data-act="close">${primary ? "Stay here" : "Nice!"}</button>
            </div>
        `, {
            onAction(act) {
                if (act === "next" && next) goToLesson(next.unit, next.index);
                if (act === "test") window.UnitTest?.start(unit);
            }
        });

        // progress ring + counters
        const fg = el.querySelector(".cele-ring .fg");
        if (fg) {
            const to = C * (1 - pctTo / 100);
            if (reducedMotion) fg.style.strokeDashoffset = to;
            else fg.animate(
                [{ strokeDashoffset: C * (1 - pctFrom / 100) }, { strokeDashoffset: to }],
                { duration: 1000, delay: 650, easing: "cubic-bezier(.2,.8,.2,1)", fill: "forwards" }
            );
        }
        countUp(el.querySelector(".cele-ring-val"), pctFrom, pctTo, { duration: 1000, delay: 650, suffix: "%" });
        countUp(el.querySelector(".cele-count"), Math.max(0, done - 1), done, { duration: 500, delay: 800 });

        // confetti: two cannons from the bottom corners, then a pop behind the card
        if (confetti) {
            confetti.after(150, () => confetti.burst({ x: 0, y: 1, count: 130, angle: -62, spread: 50, power: 34, gravity: .22 }));
            confetti.after(150, () => confetti.burst({ x: 1, y: 1, count: 130, angle: -118, spread: 50, power: 34, gravity: .22 }));
            confetti.after(600, () => confetti.burst({ x: .5, y: .4, count: 80, angle: -90, spread: 360, power: 12, gravity: .16 }));
        }

        window.Starr?.pose("happy", 2500);
    }

    // =========================
    // Unit complete (the grand one)
    // =========================

    function unit({ unit, score, total }) {

        const title = typeof courseData !== "undefined" && courseData[unit] ? courseData[unit].title : "";
        const perfect = total > 0 && score === total;
        const ratio = total ? score / total : 1;
        const nextUnit = nextUnitAfter(unit);

        const msg = perfect ? "Flawless. Every single one right!"
            : ratio >= .8 ? "Outstanding work. You've mastered this unit."
            : ratio >= .6 ? "Solid pass. A quick review will make it perfect."
            : "You made it through! Revisit the Starrfalls and try again for a higher score.";

        const { el, confetti } = open("unit", `
            <div class="cele-badge" aria-hidden="true">
                <span class="cele-shock"></span>
                <span class="cele-shock two"></span>
                <div class="cele-mascot cele-mascot-big">${starMarkup({ crown: true })}</div>
            </div>

            <div class="cele-kicker">Unit complete</div>
            <h2 class="cele-title cele-title-letters" aria-label="${esc(unit)}: ${esc(title)}">${letters(`${unit}: ${title}`)}</h2>

            ${total ? `
                <div class="cele-score" aria-label="Score ${score} out of ${total}">
                    <strong class="cele-count">0</strong><span>/ ${total}</span>
                </div>` : ""}

            ${perfect ? `<div class="cele-stamp">Perfect!</div>` : ""}

            <p class="cele-msg">${esc(msg)}</p>

            <div class="cele-actions">
                ${nextUnit ? `<button type="button" class="cele-btn gold" data-act="next-unit">Start ${esc(nextUnit)}</button>` : ""}
                <button type="button" class="cele-btn ghost light" data-act="close">Back to lessons</button>
            </div>
        `, {
            onAction(act) {
                if (act === "next-unit" && nextUnit) goToLesson(nextUnit, 0);
            }
        });

        countUp(el.querySelector(".cele-score .cele-count"), 0, score, { duration: 1200, delay: 1100 });

        if (confetti) {
            // wave 1: big fountain from the bottom
            confetti.after(250, () => confetti.burst({ x: .5, y: 1.02, count: 280, angle: -90, spread: 75, power: 38, gravity: .2 }));
            // wave 2: fireworks left / right / centre
            confetti.firework({ x: .22, y: .32, delay: 900 });
            confetti.firework({ x: .78, y: .28, delay: 1250 });
            confetti.firework({ x: .5, y: .18, count: 140, delay: 1700 });
            // wave 3: side cannons + a long star shower
            confetti.after(2300, () => confetti.burst({ x: 0, y: .75, count: 100, angle: -38, spread: 36, power: 36, gravity: .2 }));
            confetti.after(2300, () => confetti.burst({ x: 1, y: .75, count: 100, angle: -142, spread: 36, power: 36, gravity: .2 }));
            confetti.rain({ count: 90, duration: 4500, shapes: ["star", "star", "circle"] });
        }

        window.Starr?.pose("happy", 4000);
    }

    // =========================
    // Quick burst (no card)
    // =========================

    function burst(opts = {}) {
        if (reducedMotion) return;
        const canvas = document.createElement("canvas");
        canvas.className = "cele-canvas cele-canvas-floating";
        document.body.appendChild(canvas);
        const c = new Confetti(canvas);
        c.burst({ x: .5, y: .7, count: 160, angle: -90, spread: 90, power: 30, ...opts });
        setTimeout(() => { c.stop(); canvas.remove(); }, 4000);
    }

    // ---------- hook up to progress events ----------

    document.addEventListener("progress:lesson", (e) => {
        if (e.detail && !e.detail.silent) lesson(e.detail);
    });

    document.addEventListener("progress:unit", (e) => {
        if (e.detail) unit(e.detail);
    });

    window.Celebrations = { lesson, unit, burst };

})();
