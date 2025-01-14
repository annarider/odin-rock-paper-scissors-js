/**
 * getComputerChoice will randomly return
 * one of the following: rock, paper, or scissors.
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
*/

function playRound(humanChoice, computerChoice) { 
  if (humanChoice.toLowerCase() === computerChoice) {
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

playGame();