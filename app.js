const btnContainerEl = document.querySelector(".btn-container");
const btns = document.querySelectorAll(".btn");
const playRoundEl = document.querySelector(".play-round");
const playerScoreEl = document.querySelector(".p-score");
const computerScoreEl = document.querySelector(".c-score");
const resultEl = document.querySelector(".result");

let round = 0;
let playerScore = 0;
let compScore = 0;
let resetButton;

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
  round++;
  if (playerSelection === computerSelection) {
    return ` Round ${round} was TIE. [Player: ${playerSelection} | Computer: ${computerSelection}]`;
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return `Ohh, you LOSE the round ${round}. [Player: ${playerSelection} | Computer: ${computerSelection}]`;
    } else {
      return `Yay! you WON the round ${round}. [Player: ${playerSelection} | Computer: ${computerSelection}]`;
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return `Ohh, you LOSE the round ${round}. [Player: ${playerSelection} | Computer: ${computerSelection}]`;
    } else {
      return `Yay! you WON the round ${round}. [Player: ${playerSelection} | Computer: ${computerSelection}]`;
    }
  } else {
    if (computerSelection === "rock") {
      return `Ohh, you LOSE the round ${round}. [Player: ${playerSelection} | Computer: ${computerSelection}]`;
    } else {
      return `Yay! you WON the round ${round}. [Player: ${playerSelection} | Computer: ${computerSelection}]`;
    }
  }
}

function updateScores(result) {
  result = result.toLowerCase();
  if (result.includes("won")) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (result.includes("lose")) {
    compScore++;
    computerScoreEl.textContent = compScore;
  } else return;
}

function determineWinner() {
  if (playerScore === 5 || compScore === 5) {
    if (playerScore > compScore) {
      resultEl.textContent = "Congrats! Player has WON the game.";
      setGameOver();
    } else {
      resultEl.textContent = "You LOSE the game.";
      setGameOver();
    }
  }
}

function setGameOver() {
  for (btn of btns) {
    btn.disabled = true;
  }
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  btnContainerEl.after(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  for (btn of btns) {
    btn.disabled = false;
  }
  playRoundEl.textContent = "";
  playerScore = 0;
  playerScoreEl.textContent = 0;
  compScore = 0;
  computerScoreEl.textContent = 0;
  round = 0;
  resetButton.parentNode.removeChild(resetButton);
}

function start(pSelection, cSelection) {
  const listEl = document.createElement("li");
  const result = playRound(pSelection, cSelection);
  listEl.textContent = result;
  playRoundEl.appendChild(listEl);
  updateScores(result);
  determineWinner();
}

//event listner
btnContainerEl.addEventListener("click", (e) => {
  const playerSelection = e.target.dataset.selection;
  const computerSelection = getComputerChoice();
  start(playerSelection, computerSelection);
});
