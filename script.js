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

    let playerLossMessage = "You lost (╯°□°)╯︵ ┻━┻ " + computerSelection + " beats " + playerSelection;
    let playerWinMessage = "You won (ง ͡ʘ ͜ʖ ͡ʘ)ง " + playerSelection + " beats " + computerSelection;

    return playerWon ? playerWinMessage : playerLossMessage;
}
