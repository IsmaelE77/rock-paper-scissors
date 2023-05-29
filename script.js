const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

round = 0 ;
computer = 0;
player = 0;
tie = 0;

const wait = ms => new Promise(res => setTimeout(res, ms));

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

function selectWinner(playerSelection, computerSelection) {
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
choices.forEach(choice => choice.addEventListener('click', e => playRound(e)));

function playRound(e) {
    e.target.classList.add('focus');
    selectWinner(e.target.dataset.key,getComputerChoice());
    round++;
    updateStatus();
    setTimeout(function() {
        e.target.classList.remove('focus');
        welcome();
    }, 1000);
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

const gameBoard = document.querySelector('.gameBoard');
const welcomeBoard = document.querySelector('.welcomeBoard');

const newRoundBtn = document.querySelector('#round');
const startBtn = document.querySelector('#start');

startBtn.addEventListener('click',newGame);
newRoundBtn.addEventListener('click',continueGame);

function newGame(){
    round = 0 ;
    computer = 0 ;
    player = 0;
    tie = 0;
    updateStatus();
    welcomeBoard.classList.add('hidden');
    gameBoard.classList.remove('hidden');
}

function continueGame(){
    welcomeBoard.classList.add('hidden');
    gameBoard.classList.remove('hidden');
}

function welcome(){
    gameBoard.classList.add('hidden');
    welcomeBoard.classList.remove('hidden');
    startBtn.textContent = "Start From Over";
    newRoundBtn.classList.remove('hidden');
}

