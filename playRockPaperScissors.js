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

function getComputerChoice () {
  let randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
}

getComputerChoice();