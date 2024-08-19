let humanScore = 0;
let computerScore = 0;

// generate the number between 0-2 and assign the number to a choice of rock, paper, or scissors

function getComputerChoice() {
const computerChoice = Math.floor(Math.random() * 3); 
    if (computerChoice === 0) {
        return "rock"; 
    }
    else if (computerChoice === 1) {
        return "paper"; 
    }
    else if (computerChoice === 2) {
        return "scissors"; 
    }
}

function getHumanChoice() {
    const humanChoice = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    return humanChoice; 
}

function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice)
        return ("Try again! It's a tie.");
    else if (humanChoice === "rock" && computerChoice === "scissors", ++humanScore)
        return ("You win! Rock beats Scissors!");
    else if (humanChoice === "rock" && computerChoice === "paper", ++computerScore)
        return ("You lose! Paper beats Rock!");
    else if (humanChoice === "paper" && computerChoice === "rock", ++humanScore)
        return ("You win! Paper beats Rock!");
    else if (humanChoice === "paper" && computerChoice === "scissors", ++computerScore)
        return ("You lose! Scissors beats Paper!");
    else if (humanChoice === "scissors" && computerChoice === "paper", ++humanScore)
        return ("You win! Scissors beats Paper!");
    else if (humanChoice === "scissors" && computerChoice === "rock", ++computerScore)
        return ("You lose! Rock beats Scissors!");
    else {
        return "Invalid Choice";
    }
}

const humanSelection = getHumanChoice ();
const computerSelection = getComputerChoice ();

console.log(playRound(humanSelection, computerSelection));
console.log(humanScore);
console.log(computerScore);
