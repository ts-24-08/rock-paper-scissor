import { getComputerChoice, getResult } from "./gameLogic.js";

console.log(getComputerChoice, getResult); // Überprüfen, ob die Funktionen importiert wurden




import "./style.css";

const startScreen = document.getElementById("startscreen");
const startButton = document.getElementById("startbutton");
const rulesButton = document.getElementById("rulesbutton");
const scoreDisplay = document.getElementById("score");
const resultDisplay = document.getElementById("results");

startButton.addEventListener("click", startGame);

const choiceButtons = document.querySelectorAll("button[data-choice]");

choiceButtons.forEach((button) => {
  button.addEventListener("click", function (event) {
    const playerChoice = event.target.getAttribute("data-choice");
    playRound(playerChoice);
  });
});

let playerscore = 0;
let computerscore = 0;

function startGame() {
  startScreen.classList.add("hidden");
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
