// =========================
// COURSE DATA
// =========================



const layout = document.querySelector(".course-layout");
const units = document.querySelectorAll(".unit");

const lessonSidebar = document.querySelector(".lesson-sidebar");
const lessonContent = document.querySelector(".lesson-content");

const unitTitle = document.getElementById("unit-title");

const lessonBox = document.getElementById("lesson-box");

const lessonBody = document.querySelector(".lesson-body");

let currentUnit = null;
let currentLessonName = null;


function loadUnit(unitName){

    const unit = courseData[unitName];

    if(!unit) return;

    layout.classList.add("show-lessons");

    lessonSidebar.innerHTML = "";

    unit.lessons.forEach((lesson,index)=>{

        const div = document.createElement("div");

        div.className = "lesson";

        div.textContent = lesson;

        div.dataset.unit = unitName;

        div.dataset.lesson = lesson;

        div.setAttribute("role", "option");
        div.setAttribute("tabindex", "0");
        div.setAttribute("aria-selected", "false");

        div.addEventListener("click", ()=>{

            loadLesson(unitName,index);

        });

        div.addEventListener("keydown", (e) => {

            if(e.key === "Enter" || e.key === " "){
                e.preventDefault();
                loadLesson(unitName,index);
            }

        });

        lessonSidebar.appendChild(div);

    });

    highlightActiveLesson(unitName);

}

function highlightActiveLesson(unitName){

    const lessonDivs = lessonSidebar.querySelectorAll(".lesson");

    lessonDivs.forEach(div => {

        const isActive = div.dataset.unit === currentUnit && div.dataset.lesson === currentLessonName;

        div.classList.toggle("active", isActive);
        div.setAttribute("aria-selected", isActive ? "true" : "false");

    });

}

function loadLesson(unitName, lessonIndex) {

    const unit = courseData[unitName];

    if (!unit) {
        console.log("Unit not found: " + unitName);
        return;
    }

    const lessonName = unit.lessons[lessonIndex];

    console.log("Loading lesson:", unitName, lessonName);

    currentUnit = unitName;
    currentLessonName = lessonName;
    window.currentUnit = unitName;
    window.currentLessonName = lessonName;

    // Update header
    unitTitle.textContent = `${unitName} | ${unit.title}`;

    lessonBox.textContent = lessonName;

    // Reflect selection in the unit list too
    units.forEach(u => {
        const isActiveUnit = u.textContent.trim() === unitName;
        u.classList.toggle("active", isActiveUnit);
        u.setAttribute("aria-selected", isActiveUnit ? "true" : "false");
    });

    highlightActiveLesson(unitName);



    // Load content

    const content = lessonContentData[unitName]?.[lessonName];

    console.log("Content found:", content);

    renderLessonContent(content, lessonName);

    if (window.matchMedia("(max-width: 700px)").matches) {
        closeLessonSidebar();
    }

    console.log(courseData)
    console.log(lessonContentData)

    registerSections();

    // Let other scripts (e.g. the Starr mascot) react to a lesson change.
    document.dispatchEvent(new CustomEvent("lesson:loaded", {
        detail: { unit: unitName, lesson: lessonName, index: lessonIndex }
    }));

}

function renderLessonContent(content, lessonName) {
    if (!content) {
        lessonBody.innerHTML = `
            <div class="lesson-layout-wrapper">
                <div class="lesson-main-column">
                    <section class="lesson-section">
                        <h2>${lessonName}</h2>
                        <p>Lesson content coming soon.</p>
                    </section>
                </div>
            </div>
        `;
        return;
    }

    // 1. Parse content to extract vocab and assign IDs to in-content boxes
    const temp = document.createElement("div");
    temp.innerHTML = content;

    const vocabList = [];
    const seen = new Set();
    const boxes = temp.querySelectorAll(".vocab-box");

    boxes.forEach((box, idx) => {
        const boxId = box.id || `in-lesson-vocab-${idx + 1}`;
        box.id = boxId;

        const termEl = box.querySelector(".vocab-term");
        const p = box.querySelector("p");
        if (!termEl || !p) return;

        const rawTerm = termEl.textContent.replace(/:\s*$/, "").trim();
        const clone = p.cloneNode(true);
        clone.querySelector(".vocab-term")?.remove();
        const def = clone.textContent.replace(/^\s*:\s*/, "").replace(/\s+/g, " ").trim();
        const key = rawTerm.toLowerCase();

        if (rawTerm && def && !seen.has(key)) {
            seen.add(key);
            vocabList.push({
                id: boxId,
                term: rawTerm,
                def: def
            });
        }
    });

    // 2. Build the vocabulary sidebar HTML
    let vocabSidebarHtml = "";
    const countText = vocabList.length === 1 ? "1 Word" : `${vocabList.length} Words`;

    if (vocabList.length > 0) {
        const cardsHtml = vocabList.map(item => `
            <div class="vocab-summary-card" data-vocab-target="${item.id}" tabindex="0" role="button" aria-label="Jump to ${item.term} in lesson">
                <div class="vocab-summary-card-header">
                    <span class="vocab-label">Vocabulary</span>
                    <span class="vocab-jump-hint" title="Scroll to term in lesson">
                        <i class="fas fa-location-arrow"></i>
                    </span>
                </div>
                <div class="vocab-summary-card-body">
                    <span class="vocab-term">${item.term}:</span>
                    <p class="vocab-summary-def">${item.def}</p>
                </div>
            </div>
        `).join("");

        vocabSidebarHtml = `
            <aside class="lesson-vocab-sidebar" id="lesson-vocab-sidebar" aria-label="Lesson Vocabulary">
                <div class="vocab-sidebar-header">
                    <div class="vocab-sidebar-title-group">
                        <div class="vocab-sidebar-icon">
                            <i class="fas fa-book-bookmark"></i>
                        </div>
                        <div>
                            <h3 class="vocab-sidebar-title">Lesson Vocabulary</h3>
                            <span class="vocab-sidebar-subtitle">Key terms covered in this lesson</span>
                        </div>
                    </div>
                    <span class="vocab-count-badge">${countText}</span>
                </div>
                <div class="vocab-cards-list">
                    ${cardsHtml}
                </div>
            </aside>
        `;
    } else {
        vocabSidebarHtml = `
            <aside class="lesson-vocab-sidebar empty" id="lesson-vocab-sidebar" aria-label="Lesson Vocabulary">
                <div class="vocab-sidebar-header">
                    <div class="vocab-sidebar-title-group">
                        <div class="vocab-sidebar-icon">
                            <i class="fas fa-book-bookmark"></i>
                        </div>
                        <div>
                            <h3 class="vocab-sidebar-title">Lesson Vocabulary</h3>
                            <span class="vocab-sidebar-subtitle">Key terms covered in this lesson</span>
                        </div>
                    </div>
                    <span class="vocab-count-badge">0 Words</span>
                </div>
                <div class="vocab-empty-box">
                    <i class="fas fa-book-open"></i>
                    <p>No new vocabulary terms introduced in this lesson.</p>
                </div>
            </aside>
        `;
    }

    // 3. Inject the layout wrapper
    lessonBody.innerHTML = `
        <div class="lesson-layout-wrapper">
            <div class="lesson-main-column">
                ${temp.innerHTML}
            </div>
            ${vocabSidebarHtml}
        </div>
    `;

    // 4. Wire click and keyboard handlers to jump to in-content vocab box
    wireVocabJumpLinks();
}

function wireVocabJumpLinks() {
    const cards = lessonBody.querySelectorAll(".vocab-summary-card");
    cards.forEach(card => {
        const targetId = card.dataset.vocabTarget;
        if (!targetId) return;

        const jumpAction = () => {
            const targetEl = document.getElementById(targetId);
            if (!targetEl) return;

            const stickyTop = document.querySelector(".lesson-top-sticky");
            const offset = stickyTop ? stickyTop.offsetHeight + 30 : 140;

            const rect = targetEl.getBoundingClientRect();
            const containerRect = lessonContent.getBoundingClientRect();
            const targetTop = lessonContent.scrollTop + (rect.top - containerRect.top) - offset;

            lessonContent.scrollTo({ top: targetTop, behavior: "smooth" });

            // Visual feedback: temporarily pulse / highlight the in-content box
            targetEl.classList.remove("vocab-highlight-pulse");
            void targetEl.offsetWidth; // trigger reflow
            targetEl.classList.add("vocab-highlight-pulse");
            setTimeout(() => targetEl.classList.remove("vocab-highlight-pulse"), 2000);
        };

        card.addEventListener("click", jumpAction);
        card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                jumpAction();
            }
        });
    });
}

function registerSections() {

    // observer.disconnect();

    const sections = document.querySelectorAll(".lesson-section");

    sections.forEach(section => observer.observe(section));

}

let activeHoveredUnit = null;
let flyoutCloseTimer = null;

function updateLessonSidebarPosition() {
    if (!activeHoveredUnit || !lessonSidebar.classList.contains("show")) return;

    const sidebar = document.querySelector(".course-sidebar");
    if (!sidebar) return;

    const sidebarRect = sidebar.getBoundingClientRect();
    const unitRect = activeHoveredUnit.getBoundingClientRect();

    // Position top aligned with the active unit button relative to course-sidebar
    let targetTop = unitRect.top - sidebarRect.top;

    // Constrain so it doesn't overflow above top padding or below the profile card
    const flyoutHeight = lessonSidebar.offsetHeight || 300;
    const maxAllowedTop = window.innerHeight - flyoutHeight - 110; // 110px profile card clearance

    if (targetTop > maxAllowedTop) {
        targetTop = Math.max(18, maxAllowedTop);
    }
    if (targetTop < 18) {
        targetTop = 18;
    }

    lessonSidebar.style.top = `${Math.round(targetTop)}px`;
}

function scheduleCloseFlyout() {
    clearTimeout(flyoutCloseTimer);
    flyoutCloseTimer = setTimeout(() => {
        closeLessonSidebar();
    }, 180);
}

function cancelCloseFlyout() {
    clearTimeout(flyoutCloseTimer);
}

function openUnit(unit){

    cancelCloseFlyout();
    activeHoveredUnit = unit;

    const unitName = unit.childNodes[0]?.textContent?.trim() || unit.textContent.trim();

    units.forEach(u => {
        u.classList.remove("active");
        u.setAttribute("aria-expanded", "false");
    });

    unit.classList.add("active");
    unit.setAttribute("aria-expanded", "true");

    loadUnit(unitName);

    lessonSidebar.classList.add("show");
    updateLessonSidebarPosition();

}

function closeLessonSidebar(){

    activeHoveredUnit = null;
    lessonSidebar.classList.remove("show");

    units.forEach(u => {
        u.setAttribute("aria-expanded", "false");
        // Keep the unit whose lesson is currently loaded visually active
        const name = u.childNodes[0]?.textContent?.trim() || u.textContent.trim();
        u.classList.toggle("active", name === currentUnit);
    });

}

units.forEach((unit) => {

    unit.setAttribute("aria-haspopup", "listbox");
    unit.setAttribute("aria-expanded", "false");

    // Mouse users: hover opens the flyout
    unit.addEventListener("mouseenter", () => {
        cancelCloseFlyout();
        openUnit(unit);
    });

    unit.addEventListener("mouseleave", () => {
        scheduleCloseFlyout();
    });

    // Touch / keyboard users: click opens/selects the flyout for this unit
    unit.addEventListener("click", () => {
        cancelCloseFlyout();
        openUnit(unit);
    });

    unit.addEventListener("keydown", (e) => {

        if(e.key === "Enter" || e.key === " "){
            e.preventDefault();
            openUnit(unit);
        }

        if(e.key === "Escape"){
            closeLessonSidebar();
        }

    });

});

lessonSidebar.addEventListener("mouseenter", () => {
    cancelCloseFlyout();
    lessonSidebar.classList.add("show");
});

lessonSidebar.addEventListener("mouseleave", () => {
    scheduleCloseFlyout();
});

const unitList = document.querySelector(".unit-list");

if (unitList) {
    unitList.addEventListener("scroll", () => {
        if (lessonSidebar.classList.contains("show")) {
            updateLessonSidebarPosition();
        }
    });

    unitList.addEventListener("mouseenter", () => {
        cancelCloseFlyout();
    });

    unitList.addEventListener("mouseleave", (e) => {
        if (lessonSidebar.contains(e.relatedTarget)) return;
        scheduleCloseFlyout();
    });
}

window.addEventListener("resize", () => {
    if (lessonSidebar.classList.contains("show")) {
        updateLessonSidebarPosition();
    }
});

document.getElementById("start-review-btn")?.addEventListener("click", () => {
    window.Starr?.quiz();
});

document.querySelectorAll(".lesson-toolbar .toolbar-btn").forEach(button => {
    if (button.id === "start-review-btn" || button.textContent.trim() === "Ask Starr") return;

    button.addEventListener("click", () => {
        window.alert("This feature is currently under development.");
    });
});

// Close the flyout when a click lands outside of both unit list and lesson sidebar
document.addEventListener("click", (e) => {

    if(!lessonSidebar.contains(e.target) && !unitList?.contains(e.target)){
        closeLessonSidebar();
    }

});



const tabs = document.querySelectorAll(".lesson-tabs .tab");
// const sections = document.querySelectorAll(".lesson-section");

// ---------------------
// Clicking a tab
// ---------------------

tabs.forEach(tab => {

    tab.addEventListener("click", (event) => {

        event.preventDefault();

        const targetId = tab.getAttribute("href")?.slice(1);

        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        // Ignore intersection updates until the smooth scroll settles,
        // otherwise sections passed through mid-scroll steal the active tab back.
        isTabClickScrolling = true;

        if (targetId) {
            const targetSection = document.getElementById(targetId);
            const stickyTop = document.querySelector(".lesson-top-sticky");

            if (targetSection && lessonContent) {
                const isMobileLayout = window.matchMedia("(max-width: 700px)").matches;
                if (isMobileLayout) {
                    // Mobile scrolls the document, while desktop scrolls the lesson panel.
                    // Measure after layout settles so the sticky header's full height is
                    // accounted for and the section heading remains visible below it.
                    requestAnimationFrame(() => {
                        const headerHeight = stickyTop?.getBoundingClientRect().height ?? 0;
                        const targetTop = window.scrollY
                            + targetSection.getBoundingClientRect().top
                            - headerHeight
                            - 28;
                        window.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
                    });
                    return;
                }

                const offset = stickyTop ? stickyTop.offsetHeight + 24 : 120;
                const rect = targetSection.getBoundingClientRect();
                const containerRect = lessonContent.getBoundingClientRect();
                const targetTop = lessonContent.scrollTop + (rect.top - containerRect.top) - offset;

                lessonContent.scrollTo({ top: targetTop, behavior: "smooth" });
            }
        }

    });

});


// ---------------------
// Scrolling
// ---------------------

const observer = new IntersectionObserver((entries) => {

    if (isTabClickScrolling) return;

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            tabs.forEach(t => t.classList.remove("active"));

            const activeTab = Array.from(tabs).find(tab => tab.getAttribute("href") === `#${entry.target.id}`);

            if (activeTab) {
                activeTab.classList.add("active");
            }

        }

    });

}, {

    threshold: 0.5

});

observer.disconnect();

// Flag set true while a tab-click-triggered smooth scroll is in progress,
// so the observer doesn't override the tab the user just clicked.
let isTabClickScrolling = false;
let scrollEndTimer = null;

lessonContent.addEventListener("scroll", () => {

    if (!isTabClickScrolling) return;

    clearTimeout(scrollEndTimer);

    scrollEndTimer = setTimeout(() => {
        isTabClickScrolling = false;
    }, 150);

});


// sections.forEach(section => observer.observe(section));

// // lesson header - unit name and lesson name update on click
// const unitTitle = document.getElementById("unit-title");
// const lessonBox = document.getElementById("lesson-box");

// const lessons = document.querySelectorAll(".lesson");

// lessons.forEach(lesson => {
//     lesson.addEventListener("click", () => {

//         console.log("clicked!");
//         // document.querySelector(".unit-text").textContent = "TEST UNIT";

//         const unit = lesson.dataset.unit;
//         const lessonName = lesson.dataset.lesson;

//         // update top line
//         unitTitle.textContent = unit;

//         // update second line
//         lessonBox.textContent = lessonName;
//     });
// });

// ==========================================
// BADGE INFORMATION POP-UP MODAL
// ==========================================

const BADGE_INFO = {
    ap: {
        pill: "College Board Program",
        title: "Advanced Placement (AP)",
        icon: '<i class="fas fa-graduation-cap"></i>',
        desc: `
            <p><strong>Advanced Placement (AP)</strong> is an internationally recognized program created by the College Board that offers college-level curricula and examinations to high school students.</p>
            <p style="margin-top: 10px;">Scoring well on the <strong>AP Computer Science A Exam</strong> can earn you college computer science credits, advanced course standing, and a strong STEM foundation.</p>
        `
    },
    grade: {
        pill: "Target Audience",
        title: "Grade 11–12 Recommendation",
        icon: '<i class="fas fa-user-graduate"></i>',
        desc: `
            <p>This course curriculum is designed for <strong>11th and 12th grade high school students</strong> (or students with fundamental algebra and problem-solving skills).</p>
            <p style="margin-top: 10px;">It covers object-oriented programming in <strong>Java</strong>, including classes, methods, data structures (Arrays, ArrayLists, 2D Arrays), standard algorithms (Searching, Sorting), and recursion.</p>
        `
    }
};

const badgeModal = document.getElementById("badge-modal");
const badgeModalTitle = document.getElementById("badge-modal-title");
const badgeModalDesc = document.getElementById("badge-modal-desc");
const badgeModalPill = document.getElementById("badge-modal-pill");
const badgeModalIcon = document.getElementById("badge-modal-icon");
const badgeModalClose = document.querySelector(".badge-modal-close");
const badgeModalActionBtn = document.querySelector(".badge-modal-action-btn");
const badgeModalBackdrop = document.querySelector(".badge-modal-backdrop");

function openBadgeModal(type) {
    const info = BADGE_INFO[type];
    if (!info || !badgeModal) return;

    badgeModalPill.textContent = info.pill;
    badgeModalTitle.textContent = info.title;
    badgeModalIcon.innerHTML = info.icon;
    badgeModalDesc.innerHTML = info.desc;

    badgeModal.classList.add("is-open");
    badgeModal.setAttribute("aria-hidden", "false");
    badgeModalClose?.focus();
}

function closeBadgeModal() {
    if (!badgeModal) return;
    badgeModal.classList.remove("is-open");
    badgeModal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".badge-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.badge;
        openBadgeModal(type);
    });
});

badgeModalClose?.addEventListener("click", closeBadgeModal);
badgeModalActionBtn?.addEventListener("click", closeBadgeModal);
badgeModalBackdrop?.addEventListener("click", closeBadgeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && badgeModal?.classList.contains("is-open")) {
        closeBadgeModal();
    }
});

loadUnit("Unit 0");
loadLesson("Unit 0",0);
