 function getComputersChoice() {
  const arr = ["rock", "paper", "scissors"];
  let compChoice = Math.floor(Math.random() * 3);
  const comp = arr[compChoice];
  return comp;
}


function getPlayersChoice() {
  const arr = ["rock", "paper", "scissors"];
  let playersChoice = Math.floor(Math.random() * 3);
  const player = arr[playersChoice];
  return player;
}


function rockPaperScissors(player, comp) {
  let player1 = player.toLowerCase();
  if (player1 == "rock" && comp == 'rock') {
    return "its a draw";
  } else if ((player1 == "rock" && comp == "scissors")) {
    return "Player 1 wins";
  } else if ((player1 == "rock" && comp == "paper")) {
    return "Computer 1 wins";
  } else if (player1 == "paper" && comp == "paper") {
    return "its a draw";
  } else if ((player1 == "paper" && comp == "scissors")) {
    return "Computer wins";
  } else if ((player1 == "paper" && comp == "rock")) {
    return "Player 1 wins";
  } else if (player1 == "scissors" && comp == "scissors") {
    return "its a draw";
  } else if ((player1 == "scissors" && comp == "rock")) {
    return "Computer wins";
  } else {
    return "Player 1 wins";
  }
}
const player = getPlayersChoice();
const comp = getComputersChoice();

console.log("Player: " + player);
console.log("Computer: " + comp);
console.log(rockPaperScissors(player, comp));
