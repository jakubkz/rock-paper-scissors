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
console.log(getComputerChoice());