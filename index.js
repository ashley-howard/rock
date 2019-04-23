// Global variables
let playerScore = 0;
let computerScore = 0;
let gameRound = 0;
const buttons = document.querySelectorAll('button');
const pScoreboard = document.getElementById("pScoreboard");
const cScoreboard = document.getElementById("cScoreboard");
const rScoreboard = document.getElementById("rScoreboard");
const gameMessage = document.getElementById("gameMessage");
const computerPick = document.getElementById("computerPick");
const playerPick = document.getElementById("playerPick");

// This replaces the scores
pScoreboard.innerText = playerScore;
cScoreboard.innerText = computerScore;
rScoreboard.innerText = gameRound;

// Function reset
function resetScore() {
    playerScore = 0;
    computerScore = 0;
    gameRound = 0;
    pScoreboard.innerHTML = playerScore;
    cScoreboard.innerHTML = computerScore;
    rScoreboard.innerHTML = gameRound;
    gameMessage.innerText = " ";
    playerPick.innerText = "";
    computerPick.innerText = "";
}

// Win function
function win() {
    ++playerScore;
    ++gameRound;
    pScoreboard.innerHTML = playerScore;
    rScoreboard.innerHTML = gameRound;
    if (playerScore === 5) {
        alert("You have won the game!\n\n" +
            playerScore + " against " +
            computerScore + "\n\n Thanks for playing!")
        resetScore();
    }
}

// Lose function
function lose() {
    ++computerScore;
    ++gameRound;
    cScoreboard.innerHTML = computerScore;
    rScoreboard.innerHTML = gameRound;
    if (computerScore === 5) {
        alert("You have lost the game!\n\n" +
            computerScore + " against " +
            playerScore + "\n\n Thanks for playing!")
        resetScore();
    }
}

// forEach is used to select one at a time 
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        gameMessage.innerText = (singleRound(button.id))
    });
})

// computer generated actions
function computerPlay() {
    let random = Math.random();
    if (random <= 0.33) {
        computerPick.innerHTML = "Computer choose Rock!"
        return "Rock";
    } else if (random <= 0.66) {
        computerPick.innerHTML = "Computer chooses Paper!"
        return "Paper";
    } else {
        computerPick.innerHTML = "Computer chooses Scissors"
        return "Scissors";
    }
}

// Single Round Game
function singleRound(Select, computerSelection) {
    playerSelection = Select.toUpperCase();
    playerPick.innerHTML = "You choose " + Select;
    computerSelection = computerPlay();

    if (playerSelection == "ROCK" && computerSelection == "Paper") {
        lose();
        return "You have lost! Paper beats Rock";
    }
    else if (playerSelection == "PAPER" && computerSelection == "Paper") {
        return "That's a paper draw";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "Paper") {
        win();
        return "You Win! Scissors beats Paper";
    }
    else if (playerSelection == "ROCK" && computerSelection == "Rock") {
        return "That's a rock draw";
    }
    else if (playerSelection == "PAPER" && computerSelection == "Rock") {
        win();
        return "You win! Paper beats Rock";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "Rock") {
        lose();
        return "You lost! Rock beats Scissors";
    }
    else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        win();
        return "You win! Rock beats Scissors";
    }
    else if (playerSelection == "PAPER" && computerSelection == "Scissors") {
        lose();
        return "You lost! Scissors beats Paper";
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "Scissors") {
        return "That's a scissors draw";
    }
    else {
        return "Something went wrong...";
    }        
}
