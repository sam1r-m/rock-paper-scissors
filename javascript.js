// Global variables and initialization
let computerScore = 0;
let playerScore = 0;

let previousScore = document.createElement("h1");
let score = document.getElementById("score");

let text = document.createTextNode(playerScore + " - " + computerScore);
previousScore.appendChild(text);
score.appendChild(previousScore);

// Helper functions

function capitalizeFirstLetter(word) {
    let word1 = word.charAt(0).toUpperCase();
    let word2 = word.slice(1);
    
    return (word1 + word2);
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    switch(choice) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
    }
}

function writeMessage(message) {
    let element = document.createElement("p");
    let text = document.createTextNode(message);
    element.appendChild(text);
    
    let div = document.getElementById("results");
    div.appendChild(element);
}

function printScore(playerScore, computerScore) {
    let newScore = document.createElement("h1");
    let scoreText = document.createTextNode(playerScore + " - " + computerScore);
    
    newScore.appendChild(scoreText);
    score.replaceChild(newScore, previousScore);

    previousScore = newScore;
}

function printWinner() {
    let winnerMessage = document.createElement("h2");

    if (playerScore == 5) {
        let winnerText = document.createTextNode("You win!");
        winnerMessage.appendChild(winnerText);

    }
    else if (computerScore == 5) {
        let winnerText = document.createTextNode("You Lose! The computer beat you!");
        winnerMessage.appendChild(winnerText);

    }

    results.appendChild(winnerMessage);
}

// Round functions and event listeners

document.getElementById("rock").addEventListener("click", 
() => { playRound("Rock", getComputerChoice()); });

document.getElementById("paper").addEventListener("click", 
() => { playRound("Paper", getComputerChoice()); });

document.getElementById("scissors").addEventListener("click", 
() => { playRound("Scissors", getComputerChoice()); });

function playRound(playerSelection, computerSelection) {
    if ((playerScore == 5) || (computerScore == 5)) {
        return;
    }

    let result;
    let winner;
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);

    if (playerSelection === computerSelection) {
        result = ("It's a Tie! " + playerSelection + " ties with " + computerSelection);
        winner = "tie";
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
             (playerSelection === "Paper" && computerSelection === "Rock") ||
             (playerSelection === "Scissors" && computerSelection === "Paper")) {
        result = ("You Win! " + playerSelection + " beats " + computerSelection);
        winner = "player";
    }
    else {
        result = ("You Lose! " + computerSelection + " beats " + playerSelection);
        winner = "computer";
    }

    switch(winner) {
        case "computer":
            computerScore += 1;
            break;
        case "player":
            playerScore += 1;
    }

    printScore(playerScore, computerScore);
    writeMessage(result);

    if ((playerScore == 5) || (computerScore == 5)) {
        printWinner();
    }
    
    return winner;
}