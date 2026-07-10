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

    if(content){

        lessonBody.innerHTML = content;

    }

    else{

        lessonBody.innerHTML = `
            <section class="lesson-section">

                <h2>${lessonName}</h2>

                <p>
                Lesson content coming soon.
                </p>

            </section>
        `;
    }

    console.log(courseData)
    console.log(lessonContentData)

    registerSections();

}

function registerSections() {

    // observer.disconnect();

    const sections = document.querySelectorAll(".lesson-section");

    sections.forEach(section => observer.observe(section));

}

function openUnit(unit){

    const unitName = unit.textContent.trim();

    units.forEach(u => {
        u.classList.remove("active");
        u.setAttribute("aria-expanded", "false");
    });

    unit.classList.add("active");
    unit.setAttribute("aria-expanded", "true");

    loadUnit(unitName);

    const index = Array.from(units).indexOf(unit);
    const unitOffset = index * 58;
    lessonSidebar.style.top = `${unitOffset}px`;
    lessonSidebar.classList.add("show");

}

function closeLessonSidebar(){

    lessonSidebar.classList.remove("show");

    units.forEach(u => {
        u.setAttribute("aria-expanded", "false");
        // Keep the unit whose lesson is currently loaded visually active
        u.classList.toggle("active", u.textContent.trim() === currentUnit);
    });

}

units.forEach((unit) => {

    unit.setAttribute("aria-haspopup", "listbox");
    unit.setAttribute("aria-expanded", "false");

    // Mouse users: hover opens the flyout (desktop convenience)
    unit.addEventListener("mouseenter", () => openUnit(unit));

    // Touch / keyboard users: click opens/selects the flyout for this unit.
    // (Hover already opens it for mouse users — click should never toggle it closed,
    // otherwise a normal mouse click reads as "hover-open then click-close".)
    unit.addEventListener("click", () => {

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

lessonSidebar.addEventListener("mouseenter",()=>{

    lessonSidebar.classList.add("show");

});

lessonSidebar.addEventListener("mouseleave",()=>{

    closeLessonSidebar();

});

const unitList = document.querySelector(".unit-list");

unitList.addEventListener("mouseleave",(e)=>{

    // Did the cursor enter the flyout?
    if(lessonSidebar.contains(e.relatedTarget))
        return;

    closeLessonSidebar();

});

// Close the flyout when a click lands outside of it entirely
document.addEventListener("click", (e) => {

    if(!lessonSidebar.contains(e.target) && !unitList.contains(e.target)){
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

        if (targetId) {
            const targetSection = document.getElementById(targetId);
            const lessonHeader = document.querySelector(".lesson-header");

            if (targetSection && lessonContent) {
                const offset = lessonHeader ? lessonHeader.offsetHeight + 24 : 120;
                const targetTop = targetSection.offsetTop - offset;

                lessonContent.scrollTo({ top: targetTop, behavior: "smooth" });
            }
        }

    });

});


// ---------------------
// Scrolling
// ---------------------

const observer = new IntersectionObserver((entries) => {

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

loadUnit("Unit 0");
loadLesson("Unit 0",0);