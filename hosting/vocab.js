// =========================
// VOCAB — shared vocabulary extraction
// =========================
//
// Pulls { term, def } pairs out of the .vocab-box markup in lesson content.
// Used by the Starr quiz (mascot.js) and the unit test (unit-test.js).
//
//   Vocab.extractPairs(containerElement)   -> [{ term, def }]
//   Vocab.pairsForLesson(unit, lesson)     -> [{ term, def }]
//   Vocab.pairsForUnit(unit)               -> [{ term, def, lesson }]
//   Vocab.allTerms()                       -> [term, ...] across the whole course
//   Vocab.buildQuestions(pairs, count)     -> [{ term, def, masked, choices }]

(function () {

    const parser = new DOMParser();
    const lessonCache = new Map();
    let termCache = null;

    function shuffle(arr) {
        const a = arr.slice();
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function extractPairs(container) {
        const pairs = [];

        container.querySelectorAll(".vocab-box").forEach(box => {
            const termEl = box.querySelector(".vocab-term");
            const p = box.querySelector("p");
            if (!termEl || !p) return;

            const term = termEl.textContent.replace(/:\s*$/, "").trim();

            const clone = p.cloneNode(true);
            clone.querySelector(".vocab-term")?.remove();
            const def = clone.textContent.replace(/\s+/g, " ").trim();

            if (term && def.length > 10) pairs.push({ term, def });
        });

        return pairs;
    }

    function pairsForLesson(unit, lesson) {
        const key = unit + "|" + lesson;
        if (lessonCache.has(key)) return lessonCache.get(key);

        const html = typeof lessonContentData !== "undefined" ? lessonContentData[unit]?.[lesson] : null;
        const pairs = html ? extractPairs(parser.parseFromString(html, "text/html").body) : [];

        lessonCache.set(key, pairs);
        return pairs;
    }

    function pairsForUnit(unit) {
        const lessons = typeof courseData !== "undefined" ? (courseData[unit]?.lessons || []) : [];
        return lessons.flatMap(lesson => pairsForLesson(unit, lesson).map(p => ({ ...p, lesson })));
    }

    function allTerms() {
        if (termCache) return termCache;

        const seen = new Set();
        termCache = [];

        const units = typeof courseData !== "undefined" ? Object.keys(courseData) : [];
        units.forEach(unit => {
            pairsForUnit(unit).forEach(({ term }) => {
                const k = term.toLowerCase();
                if (!seen.has(k)) { seen.add(k); termCache.push(term); }
            });
        });

        return termCache;
    }

    // Blank the term out of its own definition so the answer isn't given away.
    function maskTerm(def, term) {
        const words = term.split(/\s+/).map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
        const re = new RegExp(`\\b${words.join("\\s+")}s?\\b`, "gi");
        return def.replace(re, "____");
    }

    function buildQuestions(pairs, count) {
        const same = (a, b) => a.toLowerCase() === b.toLowerCase();

        return shuffle(pairs).slice(0, count).map(q => {
            // Prefer distractors from the same pool (lesson or unit), then the whole course.
            const local = [];
            pairs.forEach(p => {
                if (!same(p.term, q.term) && !local.some(t => same(t, p.term))) local.push(p.term);
            });

            const distractors = shuffle(local).slice(0, 3);

            if (distractors.length < 3) {
                const extra = allTerms().filter(t => !same(t, q.term) && !distractors.some(d => same(d, t)));
                distractors.push(...shuffle(extra).slice(0, 3 - distractors.length));
            }

            return {
                term: q.term,
                def: q.def,
                masked: maskTerm(q.def, q.term),
                choices: shuffle([q.term, ...distractors])
            };
        });
    }

    window.Vocab = { extractPairs, pairsForLesson, pairsForUnit, allTerms, maskTerm, buildQuestions, shuffle };

})();
