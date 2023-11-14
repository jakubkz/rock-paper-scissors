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
// console.log(getComputerChoice());

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
  } else if (
    (playerSelection === "SCISSORS" && computerSelection === "ROCK") ||
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSORS")
  ) {
    alert("You have just lost the battle");
  }
}

let playerSelection = prompt(
  "Make a choice between rock paper and scissors"
).toUpperCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
