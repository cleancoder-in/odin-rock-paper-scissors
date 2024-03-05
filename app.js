function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Game was tie";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "you lose";
    } else {
      return "you won";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "you lose";
    } else {
      return "you won";
    }
  } else {
    if (computerSelection === "rock") {
      return "you lose";
    } else {
      return "you won";
    }
  }
}

function playGame() {
  let playerScore = 0;
  let compScore = 0;
  for (let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter your choice");
    const result = playRound(playerSelection, computerSelection);
    console.log(
      "Player selection: " +
        playerSelection +
        " | Computer selection: " +
        computerSelection +
        " and result of round" +
        [i] +
        " is " +
        result
    );
    if (result === "you won") {
      playerScore++;
    } else if (result === "you lose") {
      compScore++;
    } else {
      continue;
    }
  }
  //helper fn
  determineWinner(playerScore, compScore);
}

function determineWinner(pScore, cScore) {
  if (pScore > cScore) {
    console.log(
      "Congrats you won! Player score: " + pScore + " Computer Score: " + cScore
    );
  } else if (pScore < cScore) {
    console.log(
      "You Lose! Player score: " + pScore + " Computer Score: " + cScore
    );
  } else {
    console.log(
      "Game tied. Player score: " + pScore + " Computer Score: " + cScore
    );
  }
}

playGame();
