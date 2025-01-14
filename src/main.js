import { getComputerChoice, getResults } from "./gameLogic";
import "./style.css";

const elements = {
  startScreen: document.getElementById("startscreen"),
  startButton: document.getElementById("startbutton"),
  scoreDisplay: document.getElementById("score"),
  playAgainButton: document.getElementById("playagain"),
  resultText: document.getElementById("resulttext"),
  results: document.getElementById("results"),
  computerChoiceDiv: document.getElementById("computerchoice"),
  result: document.getElementById("result"),
  ruleButton: document.getElementById("rulebutton"),
  userChoiceDiv: document.getElementById("userchoice"),
  closeButton: document.getElementById("closebutton"),
  gameContainer: document.getElementById("gamecontainer"),
};

let score = 0;

const initializeGame = () => {
  elements.startScreen.classList.add("hidden");
  elements.gameContainer.classList.remove("hidden");
};

const showRules = () => {
  rules.classList.remove("hidden");
};

const hideRules = () => {
  rules.classList.add("hidden");
};

elements.startButton.addEventListener("click", initializeGame);
elements.ruleButton.addEventListener("click", showRules);
elements.closeButton.addEventListener("click", hideRules);

const choiceButtons = document.querySelectorAll("button[data-choice]");

const handleChoiceClick = (event) => {
  const playerChoice = event.currentTarget.getAttribute("data-choice");
  const computerChoice = getComputerChoice();
  const result = getResults(playerChoice, computerChoice);

  updateUI(playerChoice, computerChoice, result);
};

choiceButtons.forEach((button) => {
  button.addEventListener("click", handleChoiceClick);
});

const updateUI = (playerChoice, computerChoice, result) => {
  elements.userChoiceDiv.textContent = playerChoice;
  elements.computerChoiceDiv.textContent = computerChoice;
  elements.resultText.textContent = result;

  disableButtons();

  if (result === "win") {
    score++;
    elements.resultText.textContent = "You win!";
  } else if (result === "lose") {
    score--;
    elements.resultText.textContent = "You lose!";
  } else {
    elements.resultText.textContent = "It's a draw!";
  }

  elements.results.classList.remove("hidden");
  elements.scoreDisplay.textContent = score;
  elements.gameContainer.classList.add("hidden");
};

const disableButtons = () => {
  choiceButtons.forEach((button) => {
    button.disabled = true;
  });
};

elements.playAgainButton.addEventListener("click", () => {
  elements.results.classList.add("hidden");
  elements.gameContainer.classList.remove("hidden");

  enableButtons();
});

const enableButtons = () => {
  choiceButtons.forEach((button) => {
    button.disabled = false;
  });
};
