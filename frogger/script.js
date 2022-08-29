const timeLeft = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
let currentIndex = 1;
const width = 9;

function moveFrog(e) {
  squares[currentIndex].classList.remove("frog");

  switch (e.key) {
    case "ArrowLeft":
      console.log("Move left");
      currentIndex -= 1;
      break;
    case "ArrowRight":
      console.log("Move right");
      currentIndex += 1;
      break;
    case "ArrowUp":
      console.log("Move up");
      currentIndex -= width;
      break;
    case "ArrowDown":
      currentIndex += width;
      console.log("Move down");
  }
  squares[currentIndex].classList.add("frog");
}

document.addEventListener("keyup", moveFrog);
