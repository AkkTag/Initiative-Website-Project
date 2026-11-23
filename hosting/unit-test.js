// =========================
// UNIT TEST — vocabulary test across a whole unit
// =========================
//
//   UnitTest.start(unitName)   opens the test modal (up to 10 questions drawn
//                              from every vocab box in the unit)
//
// Finishing calls Progress.completeUnit(), which fires "progress:unit" and
// triggers the grand unit celebration (see celebrations.js).

(function () {

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const esc = (s) => String(s)
        .replace(/&/g, "&amp;").replace(/</g, "&lt;")
        .replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    let session = null;
    let overlay = null;

    function start(unit) {

        if (!window.Vocab || typeof courseData === "undefined" || !courseData[unit]) return;

        const pairs = Vocab.pairsForUnit(unit);

        if (pairs.length < 2) {
            window.Starr?.say(`There's no unit test for ${unit} yet. It unlocks once the lessons have vocabulary to test.`, {
                pose: "think", duration: 7000
            });
            return;
        }

        const questions = Vocab.buildQuestions(pairs, Math.min(10, pairs.length));

        session = { unit, title: courseData[unit].title, questions, i: 0, score: 0, picked: null, checked: false };

        openModal();
        renderQuestion();
    }

    // ---------- modal ----------

    function openModal() {

        closeModal(true);

        overlay = document.createElement("div");
        overlay.className = "ut";
        overlay.innerHTML = `
            <div class="ut-modal" role="dialog" aria-modal="true" aria-label="${esc(session.unit)} unit test" tabindex="-1">
                <header class="ut-head">
                    <div>
                        <span class="ut-kicker">Unit test</span>
                        <h2>${esc(session.unit)}: ${esc(session.title)}</h2>
                    </div>
                    <div class="ut-head-right">
                        <span class="ut-counter"></span>
                        <button type="button" class="ut-close" aria-label="Close test">&times;</button>
                    </div>
                </header>
                <div class="ut-bar" aria-hidden="true"><i></i></div>
                <div class="ut-body"></div>
                <footer class="ut-footer">
                    <div class="ut-feedback" aria-live="polite"></div>
                    <button type="button" class="ut-check" disabled>Check</button>
                </footer>
            </div>
        `;
        document.body.appendChild(overlay);

        overlay.querySelector(".ut-close").addEventListener("click", () => closeModal());
        overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
        document.addEventListener("keydown", onKey);

        requestAnimationFrame(() => {
            overlay.classList.add("is-open");
            overlay.querySelector(".ut-modal").focus();
        });
    }

    function onKey(e) {
        if (!overlay) return;
        if (e.key === "Escape") { closeModal(); return; }
        if (e.key === "Enter" && session) {
            const btn = overlay.querySelector(".ut-check");
            if (btn && !btn.disabled && document.activeElement?.classList.contains("ut-choice")) { e.preventDefault(); btn.click(); }
        }
    }

    function closeModal(immediate) {
        if (!overlay) return;
        const el = overlay;
        overlay = null;
        document.removeEventListener("keydown", onKey);
        el.classList.remove("is-open");
        setTimeout(() => el.remove(), immediate ? 0 : 250);
    }

    // ---------- questions ----------

    function renderQuestion() {

        const q = session.questions[session.i];
        const n = session.questions.length;

        session.picked = null;
        session.checked = false;

        overlay.querySelector(".ut-counter").textContent = `${session.i + 1} / ${n}`;
        overlay.querySelector(".ut-bar i").style.width = `${(session.i / n) * 100}%`;

        const body = overlay.querySelector(".ut-body");
        body.innerHTML = `
            <p class="ut-prompt">Which term matches this definition?</p>
            <div class="ut-def">${esc(q.masked)}</div>
            <div class="ut-choices" role="radiogroup" aria-label="Answer choices">
                ${q.choices.map((c, i) => `
                    <button type="button" class="ut-choice" role="radio" aria-checked="false" data-term="${esc(c)}" style="animation-delay:${i * 60}ms">
                        <span class="ut-key">${i + 1}</span><span>${esc(c)}</span>
                    </button>`).join("")}
            </div>
        `;

        const footer = overlay.querySelector(".ut-footer");
        footer.className = "ut-footer";
        overlay.querySelector(".ut-feedback").innerHTML = "";

        const check = overlay.querySelector(".ut-check");
        check.textContent = "Check";
        check.disabled = true;
        check.onclick = checkAnswer;

        const choices = [...body.querySelectorAll(".ut-choice")];

        choices.forEach(btn => {
            btn.addEventListener("click", () => {
                if (session.checked) return;
                choices.forEach(b => { b.classList.remove("is-selected"); b.setAttribute("aria-checked", "false"); });
                btn.classList.add("is-selected");
                btn.setAttribute("aria-checked", "true");
                session.picked = btn.dataset.term;
                check.disabled = false;
            });
        });

        // number keys 1-4 pick a choice
        body.onkeydown = (e) => {
            const k = parseInt(e.key, 10);
            if (k >= 1 && k <= choices.length && !session.checked) choices[k - 1].click();
        };

        choices[0].focus();
    }

    function checkAnswer() {

        if (session.picked == null || session.checked) return;

        const q = session.questions[session.i];
        const correct = session.picked.toLowerCase() === q.term.toLowerCase();

        session.checked = true;
        if (correct) session.score++;

        const choices = [...overlay.querySelectorAll(".ut-choice")];
        choices.forEach(b => {
            b.disabled = true;
            const isAnswer = b.dataset.term.toLowerCase() === q.term.toLowerCase();
            if (isAnswer) b.classList.add("is-correct");
            else if (b.classList.contains("is-selected")) b.classList.add("is-wrong");
            else b.classList.add("is-dim");
        });

        const footer = overlay.querySelector(".ut-footer");
        footer.classList.add(correct ? "good" : "bad");

        const cheers = ["Nice!", "Exactly right!", "You've got it!", "Spot on!"];
        overlay.querySelector(".ut-feedback").innerHTML = correct
            ? `<strong>${cheers[Math.floor(Math.random() * cheers.length)]}</strong>`
            : `<strong>Not quite.</strong><small>Correct answer: ${esc(q.term)}</small>`;

        window.Starr?.pose(correct ? "happy" : "oops", 1500);

        const last = session.i + 1 >= session.questions.length;
        const check = overlay.querySelector(".ut-check");
        check.textContent = last ? "Finish" : "Continue";
        check.onclick = () => {
            if (last) finish();
            else { session.i++; renderQuestion(); }
        };
        check.focus();
    }

    function finish() {
        if (!session || !overlay) return;   // guards a double-click on "Finish"

        const { unit, score, questions } = session;
        session = null;

        overlay.querySelector(".ut-bar i").style.width = "100%";
        const check = overlay.querySelector(".ut-check");
        check.disabled = true;
        check.onclick = null;

        setTimeout(() => {
            closeModal();
            if (window.Progress) Progress.completeUnit(unit, score, questions.length);
            else window.Celebrations?.unit({ unit, score, total: questions.length });
        }, reducedMotion ? 0 : 350);
    }

    window.UnitTest = { start };

})();
