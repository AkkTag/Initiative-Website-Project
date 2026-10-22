// ==========================================
// DASHBOARD CONTROLLER & REAL-TIME PROGRESS
// ==========================================

function updateDashboardProgress() {
    // 1. Base progress for other courses
    const courseProgress = {
        "apcsa-card": 0,
        "adfunc-card": 58,
        "chem-card": 45,
        "econ-card": 61
    };

    // 2. Real AP CSA progress calculation for active student
    let apcsaPercent = 0;
    let doneLessons = 0;
    let totalLessons = 57;

    if (window.Progress) {
        if (typeof window.Progress.reload === "function") {
            window.Progress.reload();
        }
        if (typeof window.Progress.overallPercent === "function") {
            apcsaPercent = window.Progress.overallPercent();
            doneLessons = window.Progress.totalCourseLessonsDone();
            totalLessons = window.Progress.totalCourseLessons() || 57;
        }
    } else {
        try {
            const raw = localStorage.getItem("starr.progress.v1");
            if (raw) {
                const parsed = JSON.parse(raw);
                doneLessons = Object.keys(parsed.lessons || {}).length;
                apcsaPercent = Math.min(100, Math.round((doneLessons / 57) * 100));
            }
        } catch (e) {
            apcsaPercent = 0;
        }
    }

    courseProgress["apcsa-card"] = apcsaPercent;

    // 3. Update DOM for all course cards
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
            if (id === "apcsa-card") {
                text.textContent = doneLessons > 0 
                    ? `${percent}% Complete (${doneLessons}/${totalLessons} lessons)`
                    : `0% Complete (0/${totalLessons} lessons)`;
            } else {
                text.textContent = `${percent}% Complete`;
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Initial progress render
    updateDashboardProgress();

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

// Update progress whenever tab becomes active or storage changes
window.addEventListener("storage", updateDashboardProgress);
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        updateDashboardProgress();
    }
});
window.addEventListener("pageshow", updateDashboardProgress);
