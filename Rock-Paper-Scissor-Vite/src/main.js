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
