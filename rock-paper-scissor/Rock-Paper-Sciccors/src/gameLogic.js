// Logic for Computer to Choice Randomly between Rock, Paper, Scissors

// Get Computer Choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
};

// Compare User and Computer Choices
export function getResult(choice) {
    const outcomes = {
        rock: { rock: "Draw", paper: "You Lose", scissors: "You Win"},
        paper: { rock: "You Win", paper: "Draw", scissors: "You Lose"},
        scissors: { rock: "You Lose", paper: "You Win", scissors: "Draw"}
    };
    const userChoice = choice;
    const computerChoice = getComputerChoice();
    const result = outcomes[userChoice][computerChoice];
    console.log(computerChoice);
    return { result, userChoice, computerChoice };
};