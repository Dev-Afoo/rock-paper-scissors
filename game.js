// Score declared in global scope so that our functions can read them
// let humanScore = 0;
// let computerScore = 0;
// Above moved to playGame function

function getComputerChoice() {
    // Rock = 0, Paper = 1, Scissors = 2

    let randomNum = Math.floor((Math.random() * 3));
    // Math.random() returns a decimal between 0 and 1. Multiply this by 3 and floor it to get any int less than 3.
    switch (randomNum) {
        case 0:
            // console.log("rock");
            return "rock";
        case 1:
            // console.log("paper");
            return "paper";
        case 2:
            // console.log("scissors");
            return "scissors";
    }
}

function getHumanChoice() {
    // Prompts user for input
    let input = prompt("Select your weapon:\nRock\nPaper\nScissors"); 
    // Check for if the user doesn't enter anything or clicks the cancel on prompt
    if (input === "" || input === null) {
        console.log("No weapon was chosen, You gonna fight with your fists?!");
    }
    return input; 
}

const playGame = (() => {

    let humanScore = 0;
    let computerScore = 0;
    let roundCount = 0;
    
    function playRound(humanChoice, computerChoice) {
        let result = "";

        // Start by converting human choice to all lowercase, this allows for case-insensitivity
        humanChoice = humanChoice.toLowerCase();
        // Check draw condition
        if (humanChoice === computerChoice) {
            result = "DRAW 🥱";  
        }
        // If choices are not the same, check for the winner
        else if (humanChoice === 'rock') {
            if (computerChoice === 'paper') {
                result = "LOSE 😥";
                computerScore += 1;
            } else {
                result = "WIN ✨";
                humanScore += 1;
            }
        }
        else if (humanChoice === 'paper') {
            if (computerChoice === 'scissors') {
                result = "LOSE 😥";
                computerScore += 1;
            } else {
                result = "WIN ✨";
                humanScore += 1;
            }
        }
        else if (humanChoice === 'scissors') {
            if (computerChoice === 'rock') {
                result = "LOSE 😥";
                computerScore += 1;
            } else {
                result = "WIN ✨";
                humanScore += 1;
            }
        }
        return console.log(result);   
    }
    // Play the round 5 times
    for(let i = 0; i < 5; i++) {
        // Attempt to retrieve choices for each round
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        // Pass choices to determine score
        playRound(humanChoice, computerChoice);
        // Display score after each round so player can keep track
        console.log(humanScore);
        console.log(computerScore); 
        roundCount += 1; 

        // If we are on the last round, compare round scores and determine a winner
        if(roundCount === 5) {
            switch (true){
                case humanScore === computerScore:
                    console.log("The Game is Tied");
                case humanScore < computerScore:
                    console.log("CPU WINS 😫⚡");
                case humanScore > computerScore:
                    console.log("CONGRATULATIONS, YOU WIN 🎉🎉🎊")
            }
        }
    }
})();





