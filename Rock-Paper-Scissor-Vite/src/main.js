import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const startscreenContainer = document.getElementById('startscreen-container');

  // Lädt die startscreen.html dynamisch
  fetch('./startscreen.html')
    .then((response) => response.text())
    .then((html) => {
      startscreenContainer.innerHTML = html;

      // Logik zum Ausblenden des Startbildschirms nach Klick auf Start Game
      const startButton = document.getElementById('startbutton');
      startButton.addEventListener('click', () => {
        startscreenContainer.style.display = 'none';
      });
    })
    .catch((error) => {
      console.error('Fehler beim Laden des Startbildschirms:', error);
    });
});

// HTML-Elemente auswählen
const startScreen = document.getElementById("startscreen");
const startButton = document.getElementById("startbutton");
const rulesButton = document.getElementById("rulesbutton");
const scoreDisplay = document.getElementById("score");
const resultSection = document.getElementById("results");

// Auswahl-Buttons für Rock, Paper, Scissors
const choiceButtons = document.querySelectorAll("button[data-choice]");

// Funktion zum Ausblenden des Startbildschirms
function startGame() {
  startScreen.classList.add("hidden");
}

// Event Listener für Start-Button
startButton.addEventListener("click", startGame);

// Event Listener für die Auswahl-Buttons
choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
      const playerChoice = button.getAttribute("data-choice");
      const computerChoice = getComputerChoice(); // Von gameLogic.js
      const result = getResult(playerChoice, computerChoice); // Von gameLogic.js
      updateUI(playerChoice, computerChoice, result); // UI aktualisieren
  });
});

// Funktion zum Aktualisieren der Benutzeroberfläche
function updateUI(playerChoice, computerChoice, result) {
  // Spieler- und Computerauswahl anzeigen
  document.getElementById("player-choice").textContent = playerChoice;
  document.getElementById("computer-choice").textContent = computerChoice;

  // Ergebnis anzeigen
  document.getElementById("game-result").textContent = result;

  // Score aktualisieren
  if (result === "win") {
      scoreDisplay.textContent = parseInt(scoreDisplay.textContent) + 1;
  }
}

// Mögliche Entscheidungen
const choices = ["rock", "paper", "scissors"];

// Funktion zur zufälligen Auswahl
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Spielregeln definieren
const outcomes = {
  rock: { rock: "draw", paper: "lose", scissors: "win" },
  paper: { rock: "win", paper: "draw", scissors: "lose" },
  scissors: { rock: "lose", paper: "win", scissors: "draw" },
};

// Funktion zur Berechnung des Ergebnisses
function getResult(playerChoice, computerChoice) {
  return outcomes[playerChoice][computerChoice];
}

