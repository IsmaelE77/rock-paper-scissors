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
    if(computerSelection == playerSelection)
        return "tie";
    else if(playerSelection == ROCK)
        return computerSelection==PAPER ? "computer": "player";   
    else if(playerSelection == PAPER)
        return computerSelection == SCISSORS ? "computer": "player";   
    else
        return computerSelection==ROCK ? "computer": "player"; 
}
