
function getComputersChoice() {
  const arr = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * 3);
  const comp = arr[compChoice];
  return comp;
}

let playerScore = 0;
let compScore = 0;

function rockPaperScissors(player1, comp) {
  let result = "";

  if (player1 == "rock" && comp == "rock") {
    result = "It's a draw";
  } else if (player1 == "rock" && comp == "scissors") {
    result = "Player 1 wins";
    playerScore += 1;
  } else if (player1 == "rock" && comp == "paper") {
    result = "Computer 1 wins";
    compScore += 1;
  } else if (player1 == "paper" && comp == "paper") {
    result = "It's a draw";
  } else if (player1 == "paper" && comp == "scissors") {
    result = "Computer wins";
    compScore += 1; 
  } else if (player1 == "paper" && comp == "rock") {
    result = "Player 1 wins";
    playerScore += 1; 
  } else if (player1 == "scissors" && comp == "scissors") {
    result = "It's a draw";
  } else if (player1 == "scissors" && comp == "rock") {
    result = "Computer wins";
    compScore += 1; 
  } else {
    result = "Player 1 wins";
    playerScore += 1; 
  }

  return result;
}

function initializeGame() {
  const playerInput = document.querySelector('#playerInput');
  const btn = document.querySelector('#submit');
  const resultElement = document.querySelector('#result');
  const scoreElement = document.querySelector('#score');

  btn.addEventListener('click', (e) => {
    const player = playerInput.value;
    const comp = getComputersChoice();
    const result = rockPaperScissors(player, comp);

    resultElement.innerHTML = "Computer chose " + comp + ", " + result;
    scoreElement.innerHTML = "Player 1 score = " + playerScore + "<br> Computer Score = " + compScore;
    if(playerScore == 5) {
      scoreElement.innerHTML = "Player 1 WINS!"
      playerScore = 0;
      compScore = 0;

    } else if(compScore == 5) {
      scoreElement.innerHTML = "Computer 1 WINS!"
      playerScore = 0;
      compScore = 0;
    }

    e.preventDefault();
  });
}

document.addEventListener('DOMContentLoaded', initializeGame);
