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

function game(){
    let playerWins = 0 ;
    let computerWins = 0;
    for(i=0;i<5;i++){
        let playerChoice = prompt("write number of your choice  :\n 1.Rock 2.Paper 3.Scissors");
        let result = playRound(playerChoice,getComputerChoice());
        if(result === "player")
            playerWins++;
        else if (result === "computer")
            computerWins++;   
    }
    console.log(`player get ${playerWins}`
                +` computer get ${computerWins}`);
}
game();