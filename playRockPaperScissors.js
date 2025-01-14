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


function playGame() {
  // buttons is a node list. It looks and acts much like an array.
  const buttons = document.querySelectorAll("button");
  const container = document.querySelector("#results");

  buttons.forEach((button) => {
    // and for each choice we add a 'click' listener
    button.addEventListener("click", () => {
      if (humanScore < 5 && computerScore < 5) {
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);
        // display result
        const content = document.createElement("p");
        content.textContent = `You chose ${humanChoice}, and computer chose
        ${computerChoice}. The winner of this round is ${result}.`;
        
        // calculate score
        result === 'tie' ? (humanScore++, computerScore++) : 
        result === 'human' ? humanScore ++ : computerScore++;   
        const score = document.createElement("p");
        score.textContent = `The score is human: ${humanScore} and computer: ${computerScore}.`;
        
        container.appendChild(content);
        container.appendChild(score);     
      }
      if (humanScore === 5 || computerScore === 5) {
        // track game winner
        let gameWinner = ''; 
        if (humanScore === computerScore) {
          gameWinner = 'both human and computer';
        } else if (humanScore > computerScore) {
          gameWinner = 'human';
        } else {
          gameWinner = 'computer';
        }
        const gameResult = document.createElement("p");
        gameResult.textContent = 'Game result: The winner is ' 
          + gameWinner + '.';
        container.appendChild(gameResult);
      }
    });
  });
}

playGame();