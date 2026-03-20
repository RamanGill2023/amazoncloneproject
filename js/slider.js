function setupSlider(rowId, leftBtnId, rightBtnId) {
    const row = document.getElementById(rowId);
    const leftBtn = document.getElementById(leftBtnId);
    const rightBtn = document.getElementById(rightBtnId);

    rightBtn.addEventListener("click", () => {
        row.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    });

    leftBtn.addEventListener("click", () => {
        row.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    });
}

// Slider 1
setupSlider("bookRow", "leftBtn", "rightBtn");

// Slider 2
setupSlider("bookRow2", "leftBtn2", "rightBtn2");

// Slider 3
setupSlider("bookRow3", "leftBtn3", "rightBtn3");