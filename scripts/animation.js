const btnRotation = document.querySelector(".btn-rotate");
const card = document.querySelector(".flip-card-inner");
const cardFront = document.querySelector(".flip-card-front");
const cardBack = document.querySelector(".flip-card-back");

const mathMain = document.querySelector(".math__oper-main");

const btnRotationBack = document.querySelector(".btn-rotate-back");

btnRotation.addEventListener("click", function (e) {
  e.preventDefault();
  // cardFront.style.position = "absolute";
  // cardBack.style.position = "relative";
  card.style.transform = "rotateY(180deg)";
  mathMain.style.backgroundColor = "transparent";
});

btnRotationBack.addEventListener("click", function (e) {
  e.preventDefault();
  // cardFront.style.position = "relative";
  // cardBack.style.position = "absolute";
  card.style.transform = "rotateY(360deg)";
});
