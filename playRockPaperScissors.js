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
 * provide an error meessage
 * The function returns the object choice
 */

function getHumanChoice() {
  choice = prompt(`Let's play! Choose rock, paper, or scissors. 
    Enter the letter r for rock, p for paper, and s or scissors.`);
  if (choice === 'r') {
    return "rock";
  } else if (choice === 'p') {
    return "paper";
  } else if (choice === 's') {
    return "scissors";
  } else {
    return "Incorrect input. Refresh & try again";
  }
}

/**
 * playRound takes a human and computer's choices
 * as arguments, plays a single round, increments
 * the winner's score, and announces a winner.
 * 
 * If the human and the computer
 * choose the same, it's a tie. 
 * 
 * If the human chooses rock, the computer 
 * chooses paper, the computer wins. 
 * The computer wins a point. 
 * Assign the winner variable to the computer. 
 * 
 * If the human chooses rock, the computer
 * chooses scissors, the human wins. 
 * The human wins a point.
 * Assign the winner variable to the human.
 * 
 * If the human chooses paper, the computer
 * chooses rock, the human wins. 
 * 
 * All possible combinations: 
 * 1. same = same
 * 2. rock < paper
 * 3. rock > scissors
 * 4. paper < scissors   
 * 
 * If same choice, then it's a tie and both get a point. 
 * Announce a tie.
 * 
 * If it's rock against paper, the player
 * who chose paper wins.
 * 
 * If it's rock against scissors, the player who
 * chose scissors wins. 
 * 
 * If it's paper against scissors, the player who
 * chose scissors wins. 
 * 
 * The winner player gets 1 point.
 * The game announces the winner. 
 * 
*/

function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
// console.log(getHumanChoice());