function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = ''

    if (randomNumber >= 0 && randomNumber <= 1/3 ) {
        computerMove = 'rock'
    } else if (randomNumber >= 1/3 && randomNumber <= 2/3) {
        computerMove = 'paper'
    } else if (randomNumber >= 2/3 && randomNumber < 1) {
        computerMove = 'scissors'
    } 
    return computerMove;
}

function playRPS(playerMove, computerMove) {

    let result = ''

    if (playerMove === 'rock' && computerMove === 'rock') {
        result = 'its a tie';
    } else if (playerMove === 'rock' && computerMove === 'paper') {
        result = 'you lose';
    } else if (playerMove === 'rock' && computerMove === 'scissors') {
        result = 'you win';
    } else if (playerMove === 'paper' && computerMove === 'rock') {
        result = 'you win';
    } else if (playerMove === 'paper' && computerMove === 'paper') {
        result = 'its a tie';
    } else if (playerMove === 'paper' && computerMove === 'scissors') {
        result = 'you lose';
    } else if (playerMove === 'scissors' && computerMove === 'rock') {
        result = 'you lose';
    } else if (playerMove === 'scissors' && computerMove === 'paper') {
        result = 'you win';
    } else if (playerMove === 'scissors' && computerMove === 'scissors') {
        result = 'its a tie';
    }
    alert('You chooses '+ playerMove +', the computer chooses ' + computerMove + ', ' + result);
}

const rockButton = document.getElementById("rock");

rockButton.addEventListener("click", () => {

    computerMove = pickComputerMove();

    playRPS('rock', computerMove)
})

const paperButton = document.getElementById("paper");

paperButton.addEventListener("click", () => {

    computerMove = pickComputerMove();

    playRPS('paper', computerMove)
})

const scissorsButton = document.getElementById("scissors");

scissorsButton.addEventListener("click", () => {

    computerMove = pickComputerMove();
 
    playRPS('scissors', computerMove)
})