function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  switch (randomNumber) {
    case 1:
      return "ROCK";
    case 2:
      return "PAPER";
    case 3:
      return "SCISSORS";
  }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection);
  if (playerSelection === computerSelection) {
    alert(`It's a draw`);
  } else if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER")
  ) {
    alert("You have just won the battle");
    playerScore += 1;
  } else if (
    (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS")
  ) {
    alert("You have just lost the battle");
    computerScore += 1;
  }
}

function gameLoop() {
  for (let i = 0; i < 5; i++) {
    console.log(game());
  }
}

function game() {
  for (let i = 0; i < 3; i++) {
    let playerSelection = prompt(
      "Make a choice between rock paper and scissors"
    ).toUpperCase();
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
}

console.log(game());

function win() {
  if (playerScore > computerScore) {
    console.log("You won");
  } else if (playerScore < computerScore) {
    console.log("You lost");
  } else if (playerScore === computerScore) {
    console.log("its a draw");
  }
}
console.log(win());
