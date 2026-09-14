// ==========================================
// DASHBOARD CONTROLLER
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Course Progress percentages
    const courseProgress = {
        "apcsa-card": 72,
        "adfunc-card": 58,
        "chem-card": 45,
        "econ-card": 61
    };

    // Calculate real AP CSA progress from localStorage if present
    try {
        const raw = localStorage.getItem("starr.progress.v1");
        if (raw) {
            const parsed = JSON.parse(raw);
            const doneCount = Object.keys(parsed.lessons || {}).length;
            // AP CSA has 4 + 15 + 12 + 9 + 17 = 57 lessons across units 0-4
            if (doneCount > 0) {
                const calculated = Math.min(100, Math.round((doneCount / 57) * 100));
                courseProgress["apcsa-card"] = Math.max(courseProgress["apcsa-card"], calculated);
            }
        }
    } catch (e) {
        // use fallback
    }

    for (const id in courseProgress) {
        const card = document.getElementById(id);
        if (!card) continue;

        const percent = courseProgress[id];
        const fill = card.querySelector(".progress-fill, .lime-progress-fill");
        const text = card.querySelector(".progress-text, .lime-progress-text");

        if (fill) {
            fill.style.width = `${percent}%`;
        }

        if (text) {
            text.textContent = `${percent}% Complete`;
        }
    }

    // 2. Hook up Course Card navigation
    const apcsaCard = document.getElementById("apcsa-card");
    if (apcsaCard) {
        const btn = apcsaCard.querySelector(".course-btn");
        const openApcsa = () => { window.location.href = "course_content.html"; };
        if (btn) btn.addEventListener("click", openApcsa);
        apcsaCard.style.cursor = "pointer";
        apcsaCard.addEventListener("click", (e) => {
            if (!e.target.closest("button")) openApcsa();
        });
    }

    // Other course cards alert coming soon
    ["adfunc-card", "chem-card", "econ-card"].forEach(id => {
        const card = document.getElementById(id);
        if (!card) return;
        const btn = card.querySelector(".course-btn");
        const showComingSoon = () => {
            alert("This course is currently being prepared and will be available soon!");
        };
        if (btn) btn.addEventListener("click", (e) => {
            e.stopPropagation();
            showComingSoon();
        });
        card.addEventListener("click", (e) => {
            if (!e.target.closest("button")) showComingSoon();
        });
    });
});
