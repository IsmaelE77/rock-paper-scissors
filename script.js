const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3) + 1;
    switch(randomNumber){
        case 1 :
            return ROCK;
            break;
        case 2 :
            return PAPER;
            break;
        case 3 :
            return SCISSORS;
            break;    
    }
}

function playRound(playerSelection, computerSelection) {
    if (computerSelection === playerSelection) {
        return "tie";
    } 
    else if ((computerSelection === ROCK && playerSelection === SCISSORS) || 
            (computerSelection === SCISSORS && playerSelection === PAPER) ||
            (computerSelection === PAPER && playerSelection === ROCK)){
            return "computer";
    }
    else{
        return "player";
    }
}