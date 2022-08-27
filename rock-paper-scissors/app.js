const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const computerimg = document.getElementById("computer-choice-img");
const userimg = document.getElementById("user-choice-img");
const options = ["rock", "paper", "scissors"];

function showImage() {
  document
    .querySelectorAll("img")
    .forEach((el) => (el.style.display = "inline-block"));
}

let userChoice;
possibleChoices.forEach((possibleChoice) => {
  possibleChoice.addEventListener("click", function (e) {
    showImage();
    userChoiceResult = e.target.id;
    computerChoiceResult = computeComputerChoice();
    userChoiceDisplay.innerText = userChoiceResult;
    computerChoiceDisplay.innerText = computerChoiceResult;
    console.log(userimg, computerimg);
    computerimg.src = `./img/${computerChoiceResult}.jpg`;
    userimg.src = `./img/${userChoiceResult}.jpg`;
    decideWinner(userChoiceResult, computerChoiceResult);
  });
});

function computeComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  return options[randomNumber];
}

function decideWinner(user, computer) {
  if (user === computer) resultDisplay.innerText = "Draw!!!";
  else if (checkWinner(user, computer))
    resultDisplay.innerText = "User wins!!!";
  else if (checkWinner(computer, user))
    resultDisplay.innerText = "Computer wins!!!";
}

function checkWinner(one, two) {
  if (
    (one === "rock" && two === "scissors") ||
    (one === "paper" && two === "rock") ||
    (one === "scissors" && two === "paper")
  )
    return true;
}
