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
    let WinMessage = "You won ง( ͡ʘ ͜ʖ ͡ʘ)ง " + playerSelection + " beats " + computerSelection;

    return playerWon ? WinMessage : LossMessage;
}

function getPlayerChoice() {
    let validGameChoices = ["rock", "paper", "scissors"];
    let playerChocie = prompt("Please choose a value between Rock,Paper and Scissors and write it :");
    while (true) {
        if (validGameChoices.includes(playerChocie.toLowerCase())) {
            return playerChocie;
        }
        alert("Please choose a valid option : Rock, Paper Or Scissors");
        playerChocie = prompt("Enter your choice : ");
    }
}

function playGame(numberOfRounds = 5) {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < numberOfRounds && computerScore < numberOfRounds) {
        let playerChoice = getPlayerChoice();
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
