let userScore = 0;
let computerScore = 0;
let moves = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const countMessage_p = document.getElementById('action-message');

const getComputerChoice = () => {
    const choices  = ['r','p','s']
    const randonNumber = Math.floor(Math.random() * 3);
    return choices [randonNumber];
}

const convertToWord = (letter) => {
     if (letter === 'r') {
         return 'Rock';
     }
     if (letter === 'p') {
         return 'Paper';
     }
     return 'Scissor';
}

const win = (userChoice, computerChoice) => {
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = 'User Won and the Call was ' + "<br>" +'User = ' +
                            convertToWord(userChoice) + ' /  Bot = ' + convertToWord(computerChoice);
}
const lose = (userChoice, computerChoice) => {
    computerScore ++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = 'Bot Won and the Call was ' + "<br>" +'User = ' +
    convertToWord(userChoice) + ' /  Bot = ' + convertToWord(computerChoice);
}
const draw = (userChoice, computerChoice) => {
    result_div.innerHTML = 'Draw and the Call was ' + "<br>" +'User = ' +
    convertToWord(userChoice) + ' /  Bot = ' + convertToWord(computerChoice);
}

const game = (userChoice) => {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            console.log('User Wins');
            win(userChoice, computerChoice);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            console.log('User Loss');
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            console.log('Draw');
            draw(userChoice, computerChoice);
            break;        
    
        default:
            break;
    }
}

const main = () => {
rock_div.addEventListener('click', function(){
    game('r');
    moves ++;
    countMessage_p.innerHTML = moves + ' - Moves';
})
paper_div.addEventListener('click', function(){
    game('p');
    moves ++;
    countMessage_p.innerHTML = moves + ' - Moves';
})
scissors_div.addEventListener('click', function(){
    game('s');
    moves ++;
    countMessage_p.innerHTML = moves + ' - Moves';
})
}
main();

