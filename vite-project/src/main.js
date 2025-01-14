import './style.css';
import { getComputerChoice, getResult } from '/src/gameLogic.js';

const startscreen = document.getElementById("startscreen");
const startbutton = document.getElementById("startbutton");
const maingame = document.getElementById("main");
const scoretable = document.getElementById("header");
const rules = document.getElementById("rules");
const results = document.getElementById("results");
const choiceButtons = document.querySelectorAll("button[data-choice]");

let playerChoice = null;
let computerChoice = null;
let score = 0; 

startbutton.addEventListener('click', startGame);



choiceButtons.forEach(button => {
  button.addEventListener('click', (event) => {

    playerChoice = event.currentTarget.getAttribute('data-choice');
    console.log(`Player choice (after click): ${playerChoice}`);

    if (!playerChoice) {
      console.log('Error: playerChoice ist null oder undefined!');
      return;
    }

    computerChoice = getComputerChoice();
    console.log(`Computer choice: ${computerChoice}`);

    showChoicesAndResult(playerChoice, computerChoice);

    updateUI(playerChoice, computerChoice);
  });
});

function startGame() {
  startscreen.classList.add('hidden');
  maingame.classList.remove('hidden');
  scoretable.classList.remove('hidden');
  rules.classList.remove('hidden');
  results.classList.remove('hidden');
}

function showChoicesAndResult(playerChoice, computerChoice) {
  console.log(`Player choice: ${playerChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  const result = getResult(playerChoice, computerChoice);

  results.innerHTML = `
  <p>Player chose: ${playerChoice}</p>
  <p>Computer chose: ${computerChoice}</p>
  <p>${result}</p>`;

}

function updateUI(playerChoice, computerChoice) {
  const result = getResult(playerChoice, computerChoice);
  
  if (result === "win") {
    score += 1;
  } else if (result === "lose") {
    score -= 1;
  }

  const scoreElement = document.getElementById("score");
  scoreElement.textContent = `${score}`;

  const resultMessage = document.getElementById("result-message");
  resultMessage.textContent = `Result: ${result}`;
}
