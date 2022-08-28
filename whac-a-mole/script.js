const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");
const grid = document.querySelector(".grid");
const resultEl = document.querySelector(".result");
const alertEl = document.querySelector(".alert");
console.log(alertEl, resultEl);
let result = 0;
let hitPosition;
let currentTime = 20;
let timeId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];

  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});

function moveMole() {
  timeId = setInterval(randomSquare, 500);
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime === 0) {
    grid.style.pointerEvents = "none";
    clearInterval(timeId);
    clearInterval(countDownTimerId);
    resultEl.innerHTML = result;
    alertEl.classList.add("active");
  }
}

let countDownTimerId = setInterval(countDown, 1000);
