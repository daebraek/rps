//commit test
const response = ["rock", "paper", "scissors"];
function getComputerChoice() {
  return response[Math.floor(Math.random() * response.length)];
}
getComputerChoice();

function playGame() {
  let playerWin = 0;
  let computerWin = 0;
  while (playerWin < 5 && computerWin < 5) {
    playerSelection = prompt("Pick your weapon: ");
    const computerSelection = getComputerChoice();
    if (
      (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "scissors") ||
      (playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "paper") ||
      (playerSelection.toLowerCase() === "paper" &&
        computerSelection === "rock")
    ) {
      console.log("Player wins. Computer sucks!");
      console.log(playerSelection, computerSelection);
      playerWin += 1;
    } else if (
      (playerSelection.toLowerCase() === "rock" &&
        computerSelection === "paper") ||
      (playerSelection.toLowerCase() === "scissors" &&
        computerSelection === "rock") ||
      (playerSelection.toLowerCase() === "paper" &&
        computerSelection === "scissors")
    ) {
      console.log("Computer wins. Player sucks!");
      console.log(playerSelection, computerSelection);
      computerWin += 1;
    }
  }
  if (playerWin > computerWin) {
    console.log("You win!");
  } else if (playerWin === computerWin) {
    console.log("It's a tie!");
  } else {
    console.log("You lose!");
  }
}
playGame();
