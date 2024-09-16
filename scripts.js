let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerSelection = Math.floor(Math.random() * 3); 
    if (computerSelection === 0) {
        return "rock"; 
    }
    else if (computerSelection === 1) {
        return "paper"; 
    }
    else if (computerSelection === 2) {
        return "scissors"; 
    }
}

let playerChoice = "";

function getPlayerChoice () {
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");

    rockBtn.addEventListener("click", () => {
        playerChoice = "rock";
        playRound(playerChoice, getComputerChoice());
    })
    paperBtn.addEventListener("click", () => {
        playerChoice = "paper"
        playRound(playerChoice, getComputerChoice());
    })
    scissorsBtn.addEventListener("click", () => {
        playerChoice = "scissors"
        playRound(playerChoice, getComputerChoice());
    })
}

function playRound(playerChoice, computerChoice) {
    let resultMessage = "";
    if (playerChoice === computerChoice) {
        resultMessage = "Try again! It's a tie.";
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
            playerChoice === "paper" && computerChoice === "rock" ||
            playerChoice === "scissors" && computerChoice === "paper") {
        ++humanScore;
        resultMessage = "You win!";
    } else if (playerChoice === "rock" && computerChoice === "paper" ||
            playerChoice === "paper" && computerChoice === "scissors" ||
            playerChoice === "scissors" && computerChoice === "rock") {
        ++computerScore;
        resultMessage = "You lose!";
    } else {
        resultMessage = "Invalid Choice";
    }
    for (let i = 0; i < 1; i++) {
        winnerCheck();
    }

    const results = document.querySelector("#results");
    results.textContent = resultMessage + ` Your score: ${humanScore} ` + `Computer score: ${computerScore}`;
} 

function winnerCheck () {
    if (humanScore === 5) {
        winner.textContent = "Congratulations, you have won!"
    }
    else if (computerScore === 5) {
        winner.textContent = "The Computer wins, you lose!"
    }
}

const rockBtn = document.createElement("button");
rockBtn.id = "rock";
rockBtn.textContent = "Rock";
document.body.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.id = "paper";
paperBtn.textContent = "Paper";
document.body.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.id = "scissors";
scissorsBtn.textContent = "Scissors";
document.body.appendChild(scissorsBtn);

const resultsDiv = document.createElement("div");
resultsDiv.id = "results";
resultsDiv.textContent = "This is a best of Five, Choose your move!";
document.body.appendChild(resultsDiv);

const winner = document.createElement("div");
winner.id = "winner";
document.body.appendChild(winner);

getPlayerChoice();