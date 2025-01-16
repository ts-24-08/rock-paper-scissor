import "./style.css";
import { getComputerChoice, getResults } from "./gameLogic";

const startScreen = document.getElementById("startscreen");
const startButton = document.getElementById("startbutton");
const rulesButton = document.getElementById("rulesbutton");
const score = document.getElementById("score");
const results = document.getElementById("results");

// Function to hide Starting Screen
function startGame() {
    startScreen.classList.add("hidden");
};

// Event Listener for the start button "Start Game" 
startButton.addEventListener("click", startGame);
