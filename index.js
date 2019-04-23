//global variables
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
const buttons = document.querySelectorAll('button');
const pScoreBoard = document.getElementById("pScoreBoard");
const cScoreBoard = document.getElementById("cScoreBoard");
const rScoreBoard = document.getElementById("rScoreBoard");
const gameMessage = document.getElementById("gameMessage");
const computerPick = document.getElementById("computerPick");
const playerPick = document.getElementById("playerPick");
pScoreBoard.innerText = playerScore;
cScoreBoard.innerText = computerScore;
rScoreBoard.innerText = gameRound;
//function reset
function resetScore() {
  playerScore = 0;
  computerScore = 0;
  gameRound = 0;
  pScoreBoard.innerHTML = playerScore;
  cScoreBoard.innerHTML = computerScore;
  rScoreBoard.innerHTML = gameRound;
  gameMessage.innerText = " ";
  playerPick.innerText = "";
  computerPick.innerText = "";
}
//win function
function win() {
  ++playerScore;
  ++gameRound;
  pScoreBoard.innerHTML = playerScore;
  rScoreBoard.innerHTML = gameRound;
  if (playerScore === 5) {
    alert("You won the Game!\n\n" +
      playerScore + "against " +
      computerScore + "\n\n Thanks for playing!")
    resetScore();
  }
}
//lose function
function lose() {
  ++computerScore;
  ++gameRound;
  cScoreBoard.innerHTML = computerScore;
  rScoreBoard.innerHTML = gameRound;
  if (computerScore === 5) {
    alert("You lost the game!\n\n" +
      computerScore + " against " +
      playerScore + "\n\n Thanks for playing!")
    resetScore();
  }
}
//forEach serve para selecionar um de cada vez
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    gameMessage.innerText = (singleRound(button.id))
  });
})
// computer generated actions
function computerPlay() {
  let random = Math.random();
  if (random <= 0.33) {
    computerPick.innerHTML = "Computer chooses Rock!"
    return "Rock"
  } else if (random <= 0.66) {
    computerPick.innerHTML = "Computer chooses Paper!"
    return "Paper"
  } else {
    computerPick.innerHTML = "Computer chooses Scissor!"
    return "Scissors"
  }
}
//  Single Round game
function singleRound(Select, computerSelection) {
  playerSelection = Select.toUpperCase();
  playerPick.innerHTML = "You choose " + Select;
  computerSelection = computerPlay();
  if (playerSelection == "ROCK" && computerSelection == "Paper") {
    lose();
    return "You Lost! Paper beats Rock";
  } else if (playerSelection == "PAPER" && computerSelection == "Paper") {
    return "That's a paper draw";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
    win();
    return "You Win! Scissors beats Paper";
  } else if (playerSelection == "ROCK" && computerSelection == "Rock") {
    return "That's a rock draw";
  } else if (playerSelection == "PAPER" && computerSelection == "Rock") {
    win();
    return "You Win! Paper beats Rock";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
    lose();
    return "You Lost! Rock beats Scissors";
  } else if (playerSelection == "ROCK" && computerSelection == "Scissors") {
    win();
    return "You Win! Rock beats Scissors";
  } else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
    lose();
    return "You Lost! Scissors beats Paper";
  } else if (playerSelection == "SCISSORS" && computerSelection == "Scissors") {
    return "That's a Scissors draw"
  } else {
    return "Something went wrong..."
  }
}
