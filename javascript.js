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
    playerSelection = playerSelection.toLowerCase();
    playerSelection = capitalizeFirstLetter(playerSelection);

    if (playerSelection === computerSelection) {
        result = ("It's a Tie! " + playerSelection + " ties with " + computerSelection);
    }
    else if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
             (playerSelection === "Paper" && computerSelection === "Rock") ||
             (playerSelection === "Scissors" && computerSelection === "Paper")) {
        result = ("You Win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        result = ("You Lose! " + computerSelection + " beats " + playerSelection);
    }

    return result;
}

function capitalizeFirstLetter(word) {
    let word1 = word.charAt(0).toUpperCase();
    let word2 = word.slice(1);
    
    return (word1 + word2);
}

