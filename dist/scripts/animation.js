"use strict";

const btnRotation = document.querySelectorAll(".btn-rotate");
// console.log(btnRotation);
const btnRotationBack = document.querySelectorAll(".btn-rotate-back");

const btnCodeZoom = document.querySelectorAll(".btn-code-zoom");

const card = document.querySelector(".flip-card-inner");
// console.log(card);
const cardFront = document.querySelector(".flip-card-front");
const cardBack = document.querySelector(".flip-card-back");

// const codeBox = document.querySelector(".code-box");

const mathMain = document.querySelector(".math__oper-main");
// const mathContainer = document.querySelector(".math-container");

// const languageJavaContainer = document.querySelector(".line-numbers");
// const languageJava = document.querySelector(".language-javascript");

// FUNCTIONS

const rotate = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("btn-rotate")) {
    setTimeout(() => {
      e.target.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor =
        "transparent";
    }, 200);

    e.target.parentElement.parentElement.parentElement.parentElement.style.transform =
      "rotateY(180deg)";
  }
};

const rotateBack = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("btn-rotate-back")) {
    console.log("rotate-back");
    setTimeout(() => {
      e.target.parentElement.parentElement.parentElement.parentElement.style.backgroundColor =
        "#e1dcc6";
    }, 200);

    e.target.parentElement.parentElement.parentElement.parentElement.style.transform =
      "rotateY(360deg)";
  }
};

const zoomCode = (e) => {
  if (e.target.classList.contains("btn-code-zoom")) {
    // hiden class hide-zoomed that hold the status of the div zoom
    const isZoomedDiv = e.target.parentElement.parentElement.querySelector(
      ".is-zoomed"
    );

    const languageJavaContainer = e.target.parentElement.parentElement.querySelector(
      ".line-numbers"
    );
    const languageJava = e.target.parentElement.parentElement.children[3].querySelector(
      "#code-window"
    );

    const mathContainer = e.target.parentElement.closest(".math-container");
    const codeBox = e.target.parentElement.parentElement.querySelector(
      ".code-box"
    );

    let heightCode = languageJava.offsetHeight + 130;
    let widthCode = languageJava.offsetWidth; // 960
    let sectionHeight = mathContainer.offsetHeight;

    if (Number(isZoomedDiv.textContent) === 0)
      localStorage.setItem("oldWidthCode", codeBox.offsetWidth);
    if (Number(isZoomedDiv.textContent) === 0)
      localStorage.setItem("oldHeightCode", codeBox.offsetHeight);
    if (Number(isZoomedDiv.textContent) === 0)
      localStorage.setItem("oldHeightSection", sectionHeight);

    let oldWidthCode = localStorage.getItem("oldWidthCode");
    let oldHeightCode = localStorage.getItem("oldHeightCode");
    let oldHeightSection = localStorage.getItem("oldHeightSection");

    let paddingVert = 250;
    let paddingHorr = 80;

    // add padding if its bigger
    let calcOptimalWidth =
      mathContainer.clientWidth >= widthCode + paddingHorr * 2
        ? widthCode + paddingHorr * 2
        : widthCode;

    if (Number(isZoomedDiv.textContent) === 0) {
      console.log("out");
      codeBox.style.transition = "all 0.3s";

      codeBox.style.marginLeft = `-${(calcOptimalWidth - oldWidthCode) / 2}px`;
      codeBox.style.width = `${calcOptimalWidth}px`;
      codeBox.style.height = `${heightCode}px`;

      languageJava.style.height = `${heightCode}px`;

      languageJavaContainer.classList.remove("set-max-height");

      mathContainer.style.transition = "all 0.2s";
      mathContainer.style.height = `${heightCode + paddingVert}px`;
      isZoomedDiv.textContent = "1";
    } else if (Number(isZoomedDiv.textContent) === 1) {
      console.log("in");

      codeBox.style.transition = "all 0.2s";
      codeBox.style.width = `${oldWidthCode}px`;
      codeBox.style.marginLeft = 0;
      codeBox.style.height = `${oldHeightCode}px`;

      mathContainer.style.height = `${oldHeightSection}px`;

      languageJavaContainer.classList.add("set-max-height");
      isZoomedDiv.textContent = "0";
    }
  }
  // console.log(isZoomed);
};

/// event listeners
document.body.addEventListener("click", rotate);
document.body.addEventListener("click", rotateBack);
document.body.addEventListener("click", zoomCode);

btnRotation.forEach((element) => {
  element.addEventListener("click", rotate);
});

btnRotationBack.forEach((element) => {
  element.addEventListener("click", rotateBack);
});

btnCodeZoom.forEach((element) => {
  element.addEventListener("click", zoomCode());
});

// END EVENT LISTENERS
