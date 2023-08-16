let playerScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function playRound(playerSelection, computerSelection) {
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      return "You won the game!";
    } else {
      return "You lost the game!";
    }
  } else {
    if (playerSelection === computerSelection) {
      return "tie";
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats Rock!";
      } else {
        playerScore++;
        return "You win! Rock beats Scissors!";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats Paper!";
      } else {
        playerScore++;
        return "You win! Paper beats Rock!";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats Scissors!";
      } else {
        playerScore++;
        return "You win! Scissors beats Paper!";
      }
    }
  }
}
const div = document.querySelector("div");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    div.innerText = playRound(button.innerHTML, getComputerChoice());
    div.innerText += `\nPlayer Score: ${playerScore} Computer Score: ${computerScore}`;
    if (playerScore === 5 || computerScore === 5) {
      div.innerText += `\n${playRound(button.innerHTML, getComputerChoice())}`;
    }
  });
});

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     const playerSelection = prompt("Choose rock, paper, or scissors: ");
//     const computerSelection = getComputerChoice();
//     determineWinner(playerSelection.toLowerCase(), computerSelection);
//   }

//   if (playerScore > computerScore) {
//     console.log(
//       `You won the game! playerScore:${playerScore} to computerScore:${computerScore}`
//     );
//   } else if (playerScore < computerScore) {
//     console.log(
//       `You lost the game! computerScore:${computerScore} to playerScore:${playerScore}`
//     );
//   }
// }

// playGame();
