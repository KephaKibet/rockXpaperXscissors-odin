'use strict'
console.log("rock paper scissors");

const computerPlay = function () {
  const words = ['Rock', 'Paper', 'Scissors'];
  const word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  return  word
  
}


function playRound(playerSelection, computerSelection) {
  if (computerPlay() = 
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));