let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".player-choices .btn-card");

const playerScorepara = document.querySelector("#playerScore");
const computerScorepara = document.querySelector("#computerScore");

const playerSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");

const scoreInfo = document.querySelector("#scoreInfo");
const scoreStatus = document.querySelector("#scoreStatus");

const playAgainButton = document.createElement("button");

const scoreContainerDiv = document.querySelector(".scoreboard");

buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
        let target = event.currentTarget;
        switch (target.querySelector(".sign").id) {
            case "rock":
                playerChoice = "rock";
                handlePlayerChoice(playerChoice);
                break;
            case "paper":
                playerChoice = "paper";
                handlePlayerChoice(playerChoice);
                break;
            case "scissors":
                playerChoice = "scissors";
                handlePlayerChoice(playerChoice);
                break;
            default:
                console.log("weird, error !");
                break;
        }
    });
});

playAgainButton.addEventListener("click", () => resetGame());

function handlePlayerChoice(playerChoice) {
    if (isGameOver(playerScore, computerScore)) {
        playAgainButton.textContent = "Play Again";
        playAgainButton.classList.add("play-again");
        scoreContainerDiv.appendChild(playAgainButton);
        showFinalScore(playerScore, computerScore);
        return;
    }

    const computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    updateSign(playerChoice, computerChoice);
    updateScore(result, playerChoice, computerChoice);

    if (isGameOver(playerScore, computerScore)) {
        playAgainButton.textContent = "Play Again";
        playAgainButton.classList.add("play-again");
        scoreContainerDiv.appendChild(playAgainButton);
        showFinalScore(playerScore, computerScore);
        return;
    }
}

function isGameOver(playerScore, computerScore) {
    return playerScore == 5 || computerScore == 5;
}

function showFinalScore(playerScore, computerScore) {
    if (playerScore > computerScore) {
        scoreInfo.textContent = "You won ง( ͡ʘ ͜ʖ ͡ʘ)ง";
        scoreStatus.textContent = capitalize("You") + " beat the computer : " + playerScore + " to " + computerScore;
    }
    if (playerScore < computerScore) {
        scoreInfo.textContent = "You lost (╯°□°)╯︵ ┻━┻";
        scoreStatus.textContent = capitalize("You") + " lost to the computer : " + playerScore + " to " + computerScore;
    }
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

function updateSign(playerChoice, computerChoice) {
    switch (playerChoice) {
        case "rock":
            playerSign.textContent = "✊";
            break;
        case "paper":
            playerSign.textContent = "✋";
            break;
        case "scissors":
            playerSign.textContent = "✌";
            break;
    }

    switch (computerChoice) {
        case "rock":
            computerSign.textContent = "✊";
            break;
        case "paper":
            computerSign.textContent = "✋";
            break;
        case "scissors":
            computerSign.textContent = "✌";
            break;
    }
}

function updateScore(result, playerChoice, computerChoice) {
    if (result == "player") {
        playerScore++;
        scoreInfo.textContent = "You won ง( ͡ʘ ͜ʖ ͡ʘ)ง ";
        scoreStatus.textContent = capitalize(playerChoice) + " beats " + capitalize(computerChoice);
        playerScorepara.textContent = "Player: " + playerScore;
    }

    if (result == "computer") {
        computerScore++;
        scoreInfo.textContent = "You lost (╯°□°)╯︵ ┻━┻";
        scoreStatus.textContent = capitalize(computerChoice) + " beats " + capitalize(playerChoice);
        computerScorepara.textContent = "Computer: " + computerScore;
    }

    if (result == "Draw") {
        scoreInfo.textContent = "Draw ¯\\(◉‿◉)/¯";
        scoreStatus.textContent = capitalize(playerChoice) + " ties " + capitalize(computerChoice);
    }
}

function getComputerChoice() {
    let gameChoices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return gameChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Draw";
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

    return playerWon ? "player" : "computer";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerSign.textContent = "❔";
    computerSign.textContent = "❔";
    scoreInfo.textContent = "Click on your choice";
    scoreStatus.textContent = "First to score 5 wins";
    playerScorepara.textContent = "Player: " + playerScore;
    computerScorepara.textContent = "Computer: " + computerScore;
    playAgainButton.remove();
}
