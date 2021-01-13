const btnRotation = document.querySelector(".btn-rotate");
const card = document.querySelector(".flip-card-inner");
const cardFront = document.querySelector(".flip-card-front");
const cardBack = document.querySelector(".flip-card-back");

const mathMain = document.querySelector(".math__oper-main");

const btnRotationBack = document.querySelector(".btn-rotate-back");

btnRotation.addEventListener("click", function (e) {
  e.preventDefault();

  setTimeout(() => {
    mathMain.style.backgroundColor = "transparent";
  }, 200);
  card.style.transform = "rotateY(180deg)";
});

btnRotationBack.addEventListener("click", function (e) {
  e.preventDefault();

  setTimeout(() => {
    mathMain.style.backgroundColor = "#e1dcc6";
  }, 200);
  card.style.transform = "rotateY(360deg)";
});
