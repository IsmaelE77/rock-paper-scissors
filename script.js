const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

round = 0 ;
computer = 0;
player = 0;
tie = 0;

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
        return tie++;
    else if(playerSelection == ROCK)
        return computerSelection == PAPER ? computer++: player++;   
    else if(playerSelection == PAPER)
        return computerSelection == SCISSORS ? computer++: player++;   
    else
        return computerSelection == ROCK ? computer++: player++; 
}



const choices = document.querySelectorAll('.player-choice .choice');
choices.forEach(choice => choice.addEventListener('click',play));


function play(e) {
    e.target.classList.add('focus');
    playRound(e.target.dataset.key,getComputerChoice());
    updateStatus();
  }

  const roundCounter = document.querySelector('.round');
  const computerScore = document.querySelector('.computerScore');
  const playerScore = document.querySelector('.playerScore');
  const tieCounter = document.querySelector('.tie');
  function updateStatus(){
    roundCounter.textContent = `round : ${round}`;
    computerScore.textContent = `computer score : ${computer}`;
    playerScore.textContent = `your score : ${player}`;
    tieCounter.textContent = `tie : ${tie}`;
  }