const outcomes = {
    rock: {
      rock: "draw",
      paper: "lose",
      scissors: "win"
    },
    paper: {
      rock: "win",
      paper: "draw",
      scissors: "lose"
    },
    scissors: {
      rock: "lose",
      paper: "win",
      scissors: "draw"
    }
  };
  

  export function getResult(playerChoice, computerChoice) {
    return outcomes[playerChoice][computerChoice];
  }
  

  export function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  

