import { getComputerChoice, getResult } from "./gameLogic.js";
import "./style.css";

console.log(getComputerChoice, getResult);

const startScreen = document.getElementById("startscreen");
const startButton = document.getElementById("startbutton");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("results");

const choices = ["rock", "paper", "scissors"];

startButton.addEventListener("click", startGame);

const choiceButtons = document.querySelectorAll("button[data-choice]");

choiceButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const playerChoice = event.currentTarget.getAttribute("data-choice");
    console.log("Player Choice:", playerChoice);
    if (playerChoice) {
      playRound(playerChoice);
    } else {
      console.error("Kein gültiger Wert für playerChoice:", playerChoice);
    }
    playRound(playerChoice);
  });
});

let playerscore = 0;
let computerscore = 0;

function startGame() {
  startScreen.classList.add("hidden");
  resultDisplay.classList.remove("hidden");
}

function updateUI(playerChoice, computerChoice, result) {
  resultDisplay.textContent = `Player chose ${playerChoice}, computer chose ${computerChoice}.`;

  if (result === "win") {
    resultDisplay.textContent += " You win!";
    playerscore++;
  } else if (result === "lose") {
    resultDisplay.textContent += " You lose!";
    computerscore++;
  } else {
    resultDisplay.textContent += " It's a draw!";
  }

  scoreDisplay.textContent = `Player: ${playerscore} - Computer: ${computerscore}`;
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(playerChoice, computerChoice);
  updateUI(playerChoice, computerChoice, result);
}
