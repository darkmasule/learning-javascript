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

let score = {
    wins: 0,
    loses: 0,
    ties: 0
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

    if (result === 'you win') {
        score.wins += 1
    } else if (result === 'you lose') {
        score.loses += 1
    } else if (result === 'its a tie') {
        score.ties += 1
    }

    alert(`You pick ${playerMove}. Computer pick ${computerMove}. ${result}.
        Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties} `);
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

const resetScore = document.getElementById("resetScore");

resetScore.addEventListener("click", () => {
    score = {
    wins: 0,
    loses: 0,
    ties: 0
}

alert(`Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`)
})