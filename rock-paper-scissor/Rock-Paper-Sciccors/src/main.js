import { getResult} from "./gameLogic.js";

const start = document.querySelector("#startscreen");
const startButton = document.querySelector("#startbutton");
const rules = document.querySelector("#rules");
const rulesButton = document.querySelector("#rulesbutton");
const closeRulesButton = document.querySelector("#closebutton");
const score = document.querySelector("#score");
const resultsElement = document.querySelector("#results");
const result = document.querySelector("#result");
const userChoice = document.querySelector("#userchoice");
const userImg = document.querySelector("#userimg");
const computerChoice = document.querySelector("#computerchoice");
const computerImg = document.querySelector("#computerimg");
const playAgain = document.querySelector("#playagain");

export const COLORS = {
    rock: "eb9e10",     // yellow
    paper: "4564f3",    // blue
    scissors: "de3b5a", // red
  };

// Hide Starting Screen
startButton.addEventListener("click", () => {
  start.classList.add("hidden");
});

// User Choice Input
const choiceButtons = document.querySelectorAll("button[data-choice]");
choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        console.log(userChoice);
        const outcome = getResult(userChoice);
        console.log("Outcome: ");
        console.log(outcome);
        updateUI(outcome);
    });
});

// UI Update (Results and Score)
async function updateUI(outcome) {
    result.textContent = outcome.result;
    
    userImg.src = `./images/${outcome.userChoice}.svg`;
    userImg.alt = outcome.userChoice;
    userImg.classList.remove(...colorsToRemove());
    userImg.classList.add(`border-[#${COLORS[outcome.userChoice]}]`);
    userChoice.textContent = outcome.userChoice;
    
    computerImg.src = `./images/${outcome.computerChoice}.svg`;
    computerImg.alt = outcome.computerChoice;
    computerImg.classList.remove(...colorsToRemove());
    console.log(COLORS[outcome.computerChoice]);
    computerImg.classList.add(`border-[#${COLORS[outcome.computerChoice]}]`);
    computerChoice.textContent = outcome.computerChoice;

    if (outcome.result === "You Win") {
        let scoreCount = parseInt(score.textContent);
        scoreCount = scoreCount + 1;
        score.textContent = scoreCount;
    }
    resultsElement.classList.remove("hidden");
};

// Close Win Screen
playAgain.addEventListener("click", () => {
    resultsElement.classList.add("hidden");
});

// Show Rules
rulesButton.addEventListener("click", () => {
    rules.classList.toggle("hidden");
});

// Close Rules
closeRulesButton.addEventListener("click", () => {
    rules.classList.add("hidden");
});

function colorsToRemove() {
    // Object.keys(COLORS) gibt ein Array aller Schlüssel im COLORS Objekt zurück
    // .map((key) => `border-[#${COLORS[key]}]`) erstellt eine neue CSS-Klasse für jeden Schlüssel
    return Object.keys(COLORS).map((key) => `border-[#${COLORS[key]}]`);
  }