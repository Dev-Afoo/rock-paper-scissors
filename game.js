let humanScore = 0;
let computerScore = 0;


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

function getHumanChoice(choice) {
// Prompts user for input
let input = choice;
// Check for if the user doesn't enter anything or clicks the cancel on prompt
// if (input === "" || input === null) {
//     console.log("No weapon was chosen, You gonna fight with your fists?!");
// }
return input; 
}

// const playGame = (() => {

// let roundCount = 0;

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
    // Updated to allow for consolelog round result to be displayed in DOM
    const roundResult = document.querySelector(".roundresult");
    roundResult.textContent = " ";
    const displayResult = document.createElement("div");
    displayResult.textContent = `${result}`;
    roundResult.appendChild(displayResult);

    return console.log(result);   // result is returned to the console
}

function whoIsWinner() {
    // Select the corresponding HTML div so we can add to it
    const winResult = document.querySelector(".winresult");
    if (humanScore === 5) {
        // Create display for win result and append with win result if player wins
        const humanWin = document.createElement("div");
        humanWin.textContent = "YOU WIN!!! ";
        winResult.appendChild(humanWin);
    } else if (computerScore === 5) {
        // Create display for win result and append with win result if computer wins
        const computerWin = document.createElement("div");
        computerWin.textContent = "CPU WINS!!!";
        winResult.appendChild(computerWin);
    } 
}

function playGame(buttonVal) {
    let humanChoice = buttonVal;                // humanChoice will be set to the button that was pressed
    let computerChoice = getComputerChoice();
    // Target 'roundshinkou' and update it to display each player's choice
    const playerSentaku = document.querySelector(".playersentaku");
    const computerSentaku = document.querySelector(".computersentaku");
    playerSentaku.textContent = " ";        // Clear the round choices by clearing all childNodes (Clean the display)
    computerSentaku.textContent = " ";      // childNodes are treated as textContent or the parent so this works!
    const humanShinkou = document.createElement("div");
    const computerShinkou = document.createElement("div");
    humanShinkou.textContent = `${humanChoice}`;
    computerShinkou.textContent = `${computerChoice}`;
    playerSentaku.appendChild(humanShinkou);        // Add display for the choices as visual displays by appending
    computerSentaku.appendChild(computerShinkou);

    playRound(humanChoice, computerChoice);     // Compare player choice to the CPU by playing the round
}


// Creates the score displays and appends them to the scoreboard
const scoreB = document.querySelector(".scoreboard");
const displayPlayer = document.createElement("div");
const displayComputer = document.createElement("div");
displayPlayer.textContent = "Nil";
displayComputer.textContent = "Nil";
scoreB.appendChild(displayPlayer);
scoreB.appendChild(displayComputer);

// Create references to each HTML button choice
const rockBtn = document.querySelector("#btn1");
const paperBtn = document.querySelector('#btn2');
const scissorsBtn = document.querySelector('#btn3');

// Add an onclick event listener for each button
rockBtn.addEventListener('click', ()=> {
    // After buttom press, call the game with rock
    playGame('rock');
    // Update score to the DOM
    scoreB.removeChild(displayPlayer);    // Remove displays from scoreboard
    scoreB.removeChild(displayComputer);
    displayPlayer.textContent = `Wins: ${humanScore}`;     // Update score with .textContent
    displayComputer.textContent = `CPU Wins: ${computerScore}`;
    scoreB.appendChild(displayPlayer);      // Append back to scoreboard
    scoreB.appendChild(displayComputer);   
    whoIsWinner();                          // Checks current score, if 5 pts reached by either one, declare winner

});
paperBtn.addEventListener('click', () => {
    // After button press, call the game with paper
    playGame('paper');
    //Update score to the DOM
    scoreB.removeChild(displayPlayer);    // Remove displays from scoreboard
    scoreB.removeChild(displayComputer);
    displayPlayer.textContent = `Wins: ${humanScore}`;     // Update score with .textContent
    displayComputer.textContent = `CPU Wins: ${computerScore}`;
    scoreB.appendChild(displayPlayer);      // Append back to scoreboard
    scoreB.appendChild(displayComputer);
    whoIsWinner();                          // Checks current score, if 5 pts reached by either one, declare winner
});
scissorsBtn.addEventListener('click', () => {
    // After button press, call the game with scissors
    playGame('scissors');
    // Update score to the DOM
    scoreB.removeChild(displayPlayer);    // Remove displays from scoreboard
    scoreB.removeChild(displayComputer);
    displayPlayer.textContent = `Wins: ${humanScore}`;      // Update score with .textContent
    displayComputer.textContent = `CPU Wins: ${computerScore}`;
    scoreB.appendChild(displayPlayer);      // Append back to scoreboard
    scoreB.appendChild(displayComputer);
    whoIsWinner();                          // Checks current score, if 5 pts reached by either one, declare winner
});



    // Play the round 5 times
    // for(let i = 0; i < 5; i++) {
    //     // Attempt to retrieve choices for each round
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     // Pass choices to determine score
    //     playRound(humanChoice, computerChoice);
    //     // Display score after each round so player can keep track
    //     console.log(humanScore);
    //     console.log(computerScore); 
    //     roundCount += 1; 

        // If we are on the last round, compare round scores and determine a winner
        // if(roundCount === 5) {
        //     switch (true){
        //         case humanScore === computerScore:
        //             console.log("The Game is Tied");
        //         case humanScore < computerScore:
        //             console.log("CPU WINS 😫⚡");
        //         case humanScore > computerScore:
        //             console.log("CONGRATULATIONS, YOU WIN 🎉🎉🎊")
        //     }
        // }
    // }
// })();







