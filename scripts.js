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
//console.log(getComputerChoice());

function getHumanChoice() {
    const humanChoice = prompt("Choose Rock, Paper, or Scissors!").toLowerCase();
    return humanChoice; 
}
//console.log(getHumanChoice());

function playGame() {
    // put constants here in order for it to generate a new value everytime the function is called
    const humanSelection = getHumanChoice ();
    const computerSelection = getComputerChoice ();

    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice)
            return ("Try again! It's a tie.");
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            ++humanScore;
            return ("You win! Rock beats Scissors!");
        } else if (humanChoice === "rock" && computerChoice === "paper") {
            ++computerScore;
            return ("You lose! Paper beats Rock!");
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            ++humanScore; 
            return ("You win! Paper beats Rock!");
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
            ++computerScore;
            return ("You lose! Scissors beats Paper!");
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            ++humanScore; 
            return ("You win! Scissors beats Paper!");
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            ++computerScore;
            return ("You lose! Rock beats Scissors!");
        } else {
            return "Invalid Choice";
        }
    }
// putting the console.log here makes it so that it calls from within the scope of playGame and not the global scope
// original problem was that this portion was in the global scope and that for it to properly test it needed to be accessible
// within the same scope as it will be calling from inside and not globally
    console.log(playRound(humanSelection, computerSelection));
    console.log("Your Score:" + humanScore);
    console.log("Computer Score:" + computerScore);
}

// this loop lets you play against the computer five times, then it breaks after the 5th time
for (let i = 0; i < 5; i++) {
    playGame();
}