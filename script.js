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
const computerChoices = document.querySelectorAll('.computer-choice .choice');
choices.forEach(choice => choice.addEventListener('click', e => playRound(e),{once:true}));

function playRound(e) {
    round++;
    e.target.classList.add('focus');
    playerChoice = e.target.dataset.key;
    computerChoice = getComputerChoice();
    selectWinner(playerChoice,computerChoice);

    choices.forEach(choice => {
        if(choice.dataset.key != playerChoice)
            choice.classList.add('disabled')
    });
    computerChoices.forEach(choice => {
        if(choice.dataset.key == computerChoice){
            choice.classList.add('focus');
            setTimeout(function() {
                choice.classList.remove('focus');
            }, 2500);
        }else{
            choice.classList.add('disabled');
        }
    });
    updateStatus();
    setTimeout(function() {
        e.target.classList.remove('focus');
        choices.forEach(choice => choice.classList.remove('disabled'));
        computerChoices.forEach(choice => choice.classList.remove('disabled'));
        welcome();
    }, 2500);
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

