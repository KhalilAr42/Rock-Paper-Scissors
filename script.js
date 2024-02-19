let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll(".player-choices .btn-card");

const playerScorepara = document.querySelector("#playerScore");
const computerScorepara = document.querySelector("#computerScore");

const playerSign = document.querySelector("#playerSign");
const computerSign = document.querySelector("#computerSign");

const scoreInfo = document.querySelector("#scoreInfo");
const scoreStatus = document.querySelector("#scoreStatus");

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

function handlePlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    updateSign(playerChoice, computerChoice);
    updateScore(result, playerChoice, computerChoice);
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

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.substring(1);
}

function handlePlayerChoice(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice);
    updateSign(playerChoice, computerChoice);
    updateScore(result, playerChoice, computerChoice);
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
        computerScore++;
        computerScorepara.textContent = "Computer: " + computerScore;
        scoreInfo.textContent = "You won ง( ͡ʘ ͜ʖ ͡ʘ)ง ";
        scoreStatus.textContent = capitalize(playerChoice) + " beats " + capitalize(computerChoice);
    }

    if (result == "computer") {
        playerScore++;
        playerScorepara.textContent = "Player: " + playerScore;
        scoreInfo.textContent = "You lost (╯°□°)╯︵ ┻━┻";
        scoreStatus.textContent = capitalize(playerChoice) + " beats " + capitalize(computerChoice);
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
