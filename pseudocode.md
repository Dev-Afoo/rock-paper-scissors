1. getComputerChoice

Randomly return string values: 'rock' 'paper' or 'scissors'

Attach a number to each choice
Call function to generate a random number between 1 and 3
Check what number is returned
CASE RANDOM NUM 1:
    return rock
CASE RANDOM NUM 2:
    return paper
CASE RANDOM NUM 3:
    return scissors

2. getHumanChoice

Call prompt method to get user's input
Function returns it as a return value.

3. Keep track of local score with humanScore and computerScore.

4. Function to play the round with playRound()

Takes 2 parameters.
humanChoice is case-insensitive (convert player choice to all lowercase string etc.)
Compare humanChoice with computerChoice
increment score based on who the round winner is

5. Create playGame that will play 5 rounds.

Move playRound and score variables into playGame.

For loop to loop through five times.
Each loop will call getHumanChoice and getComputerChoice.
Display score in each loop so player can keep track.
Use a seperate counter to keep track and see if all rounds have ended.
When all rounds have ended, check humanScore with computerScore.
Determine a winner/loser.


