"use strict";

const btnRotation = document.querySelectorAll(".btn-rotate");
// console.log(btnRotation);
const btnRotationBack = document.querySelectorAll(".btn-rotate-back");

const btnCodeZoom = document.querySelector(".btn-code-zoom");

const card = document.querySelector(".flip-card-inner");
// console.log(card);
const cardFront = document.querySelector(".flip-card-front");
const cardBack = document.querySelector(".flip-card-back");

const codeBox = document.querySelector(".code-box");

const mathMain = document.querySelector(".math__oper-main");
const mathContainer = document.querySelector(".math-container");

const languageJavaContainer = document.querySelector(".line-numbers");
const languageJava = document.querySelector(".language-javascript");

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
/// event listeners
document.body.addEventListener("click", rotate);
document.body.addEventListener("click", rotateBack);

btnRotation.forEach((element) => {
  element.addEventListener("click", rotate);
});

btnRotationBack.forEach((element) => {
  element.addEventListener("click", rotateBack);
});

// END EVENT LISTENERS

let isZoomed = false;

btnCodeZoom.addEventListener("click", function (e) {
  e.preventDefault();

  let heightCode = languageJava.offsetHeight + 130;
  let widthCode = languageJava.offsetWidth; // 960
  let sectionHeight = e.target.closest(".math-container").offsetHeight;

  // let getWidthCode = codeBox.offsetWidth; // 614

  if (!isZoomed) localStorage.setItem("oldWidthCode", codeBox.offsetWidth);
  if (!isZoomed) localStorage.setItem("oldHeightCode", codeBox.offsetHeight);
  if (!isZoomed) localStorage.setItem("oldHeightSection", sectionHeight);

  // console.log(codeBox.offsetHeight);

  // console.log("oldHeightSection", localStorage.getItem("oldHeightSection"));

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

  if (!isZoomed) {
    codeBox.style.transition = "all 0.3s";

    codeBox.style.marginLeft = `-${(calcOptimalWidth - oldWidthCode) / 2}px`;
    codeBox.style.width = `${calcOptimalWidth}px`;
    codeBox.style.height = `${heightCode}px`;

    languageJava.style.height = `${heightCode}px`;

    languageJavaContainer.classList.remove("set-max-height");

    mathContainer.style.transition = "all 0.2s";
    mathContainer.style.height = `${heightCode + paddingVert}px`;

    isZoomed = true;
  } else {
    console.log(e.target.parentElement);
    console.log(e.target.closest(".math-container").offsetHeight);

    codeBox.style.transition = "all 0.3s";
    codeBox.style.width = `${oldWidthCode}px`;
    codeBox.style.marginLeft = 0;
    codeBox.style.height = `${oldHeightCode}px`;

    // languageJava.style.height = `${oldHeightSection}px`;

    mathContainer.style.height = `${oldHeightSection}px`;

    languageJavaContainer.classList.add("set-max-height");

    isZoomed = false;
  }
});
