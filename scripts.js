function getComputerChoice () {
const computerChoice = Math.floor(Math.random() * 3) + 1; 
    if (computerChoice === 1) {
        return "Rock"; 
    }
    else if (computerChoice === 2) {
        return "Paper"; 
    }
    else if (computerChoice === 3) {
        return "Scissors"; 
    }
}
console.log(getComputerChoice());
