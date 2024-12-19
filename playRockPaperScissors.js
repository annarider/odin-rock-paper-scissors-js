/**
 * getComputerChoice will randomly return
 * one of the following: rock, paper, or scissors.
 * 
 * The function gets called
 * A random number generator picks a value
 * Math.random provides a number between 0 and 1
 * A variable stores the random number
 * Multiple the random number so it's between 0 & 99
 * Round down the decimals so the number is an integer
 * The random number can get divided into 3
 * Take the remainder (mod) and 
 * assign 0 to rock, 1 to paper, 2 to scissors
 * Return the string   
 */

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 100);
  if (randomNum % 3 === 0) {
    return "rock";
  } else if (randomNum % 3 === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

/**
 * getHumanChoice takes a user's choice & returns it
 * 
 * Provide a prompt with a message
 * The message asks a user to choose between
 * rock, paper, or scissors
 * The user can type in r, p, or s
 * If the user doesn't type in one of those values,
 * provide an error message
 * The function returns the object choice
 */

function getHumanChoice() {
  choice = prompt(`Let's play! Enter rock, paper, or scissors.`);
  return choice;
}

/**
 * playRound takes a human and computer's choices
 * as arguments, plays a single round, increments
 * the winner's score, and announces a winner.
 * 
 * All possible combinations: 
 * 1. same = same
 * 2. rock < paper
 * 3. rock > scissors
 * 4. paper < scissors   
 * 
 * Format input to be case insensitive
 * 
 * If same, then tie. Both players
 * get a point.
 * 
 * Human rock:
 * Computer paper: computer wins
 * Computer scissors: human wins
 * 
 * Human paper: 
 * Computer rock: human wins
 * Computer scissors: computer wins
 * 
 * Human scissors: 
 * Computer rock: computer wins
 * Computer paper: human wins
 * 
 * The winner player gets 1 point.
 * The game announces the winner. 
 * 
*/

function playRound(humanChoice, computerChoice) { 
  if (humanChoice.toLowerCase() === computerChoice) {
    humanScore += 1;
    computerScore += 1;
    return "tie";
  } else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'paper' ) {
    return "computer";
  } else if (humanChoice.toLowerCase() === 'rock' && computerChoice === 'scissors' ) {
    return "human";
  } else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'rock' ) {
    return "human";
  } else if (humanChoice.toLowerCase() === 'paper' && computerChoice === 'scissors' ) {
    return "computer";
  } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'rock' ) {
    return "computer";
  } else if (humanChoice.toLowerCase() === 'scissors' && computerChoice === 'paper' ) {
    return "human";
  }
}

/**
 * playGame allows 4 rounds. It keeps track of scores
 * and declares a winner at the end.
 * 
 * playGame starts a loop that runs 5 times
 * for 5 rounds. 
 * In 1 playRound: 
 * playRound calls getHumanChoice &
 * getComputerChoice to init the choices
 * 
 * call playRound & pass in init choices
 * playRound determines the round's winner,
 * returns a winner
 * 
 * playGame increments the round winner's score.
 * 
 * At the end of 5 rounds, it 
 * announces a winner.
 */

function playGame() {
  for (let step = 0; step < 5; step++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(humanSelection, computerSelection);
    
    if (winner === 'human') {
      humanScore += 1;
    } else if (winner === 'computer') {
      computerScore += 1;
    } else {
      humanScore += 1;
      computerScore += 1;
    }
    console.log(winner);
  }
  humanScore > computerScore ? console.log("The winner is you!") : console.log("The winner is computer!");
}

playGame();