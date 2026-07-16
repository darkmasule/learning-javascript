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

const rockButton = document.getElementById("rock");

rockButton.addEventListener("click", () => {

    computerMove = pickComputerMove();

    let result = ''

    if (computerMove === 'rock') {
        result = 'its a tie';
    } else if (computerMove === 'paper') {
        result = 'you lose'
    } else if (computerMove === 'scissors') {
        result = 'you win';
    }

    alert('You chooses rock, the computer chooses ' + computerMove + ', ' + result);
})

const paperButton = document.getElementById("paper");

paperButton.addEventListener("click", () => {

    computerMove = pickComputerMove();

    let result = ''

    if (computerMove === 'rock') {
        result = 'you win';
    } else if (computerMove === 'paper') {
        result = 'its a tie'
    } else if (computerMove === 'scissors') {
        result = 'you lose';
    }

    alert('You chooses paper, the computer chooses ' + computerMove + ', ' + result);
})

const scissorsButton = document.getElementById("scissors");

scissorsButton.addEventListener("click", () => {

    computerMove = pickComputerMove();
 
    let result = ''

    if (computerMove === 'rock') {
        result = 'you lose';
    } else if (computerMove === 'paper') {
        result = 'you win'
    } else if (computerMove === 'scissors') {
        result = 'its a tie';
    }

    alert('You chooses scissors, the computer chooses ' + computerMove + ', ' + result);
})