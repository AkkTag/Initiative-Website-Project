const courseProgress = {
    "apcsa-card": 72,
    "adfunc-card": 58,
    "chem-card": 45,
    "econ-card": 61
};

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
