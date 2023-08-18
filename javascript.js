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

function playRound(playerSelection, computerSelection) {
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

    console.log(result);
    return winner;
}

function capitalizeFirstLetter(word) {
    let word1 = word.charAt(0).toUpperCase();
    let word2 = word.slice(1);
    
    return (word1 + word2);
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        winner = (playRound(playerSelection, getComputerChoice()));

        switch(winner) {
            case "computer":
                computerScore += 1;
                break;
            case "player":
                playerScore += 1;
        }
    }

    if (playerScore == computerScore) {
        console.log("It's a Tie!");
    }
    else if (playerScore > computerScore) {
        console.log("You Win!");
    }
    else if (computerScore > playerScore) {
        console.log("You Lose!");
    }

    console.log("The score is " + playerScore + " - " + computerScore);
}
