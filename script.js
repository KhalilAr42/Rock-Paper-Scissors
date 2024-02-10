function getComputerChoice() {
    let gameChoices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return gameChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw ¯\\(◉‿◉)/¯";
    }

    let playerWon = false;
    switch (playerSelection.toLowerCase()) {
        case "rock":
            computerSelection == "paper" ? (playerWon = false) : (playerWon = true);
            break;
        case "scissors":
            computerSelection == "rock" ? (playerWon = false) : (playerWon = true);
            break;
        case "paper":
            computerSelection == "scissors" ? (playerWon = false) : (playerWon = true);
            break;
    }

    let LossMessage = "You lost (╯°□°)╯︵ ┻━┻ " + computerSelection + " beats " + playerSelection;
    let WinMessage = "You won (ง ͡ʘ ͜ʖ ͡ʘ)ง " + playerSelection + " beats " + computerSelection;

    return playerWon ? WinMessage : LossMessage;
}

function playGame(numberOfRounds) {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < numberOfRounds && computerScore < numberOfRounds) {
        let playerChoice = prompt("Please choose a value between Rock,Paper and Scissors and write it :");
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);

        alert(result);

        if (result.startsWith("You lost")) {
            computerScore++;
            continue;
        }

        if (result.startsWith("You won")) {
            playerScore++;
        }
    }

    let playerWon = playerScore > computerScore ? true : false;
    let winMessage = "You won, " + playerScore + " to " + computerScore;
    let lossMessage = "You Lost, " + playerScore + " to " + computerScore;

    playerWon ? alert(winMessage) : alert(lossMessage);
}
