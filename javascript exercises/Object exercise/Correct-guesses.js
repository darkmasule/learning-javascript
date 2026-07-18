let coinflipped = ''

let record = {
    correctGuesses: 0,
    incorrectGuesses: 0
}

const flippedCoin = document.getElementById("flipcoin")

flippedCoin.addEventListener("click", () => {
    let randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1/2) {
        coinflipped = 'heads'
    } else {
        coinflipped = 'tails'
    }

    console.log(coinflipped);
})

const heads = document.getElementById("heads");

heads.addEventListener("click", () => {
    if (coinflipped === 'heads') {
        record.correctGuesses += 1
        alert(`You guessed heads, you are correct
            Correct guesses: ${record.correctGuesses}. Incorrect guesses ${record.incorrectGuesses}`)
    } else if (coinflipped === 'tails') {
        record.incorrectGuesses += 1
        alert(`You guessed heads, you are wrong
            Correct guesses: ${record.correctGuesses}. Incorrect guesses ${record.incorrectGuesses}`)
    } else {
        alert('You havent flip the coin yet')}

    coinflipped = ''
})

const tails = document.getElementById("tails");

tails.addEventListener("click", () => {
    if (coinflipped === 'tails') {
        record.correctGuesses += 1
        alert(`You guessed tails, you are correct
            Correct guesses: ${record.correctGuesses}. Incorrect guesses ${record.incorrectGuesses}`)
    } else if (coinflipped === 'heads') {
        record.incorrectGuesses += 1
        alert(`You guessed tails, you are wrong
            Correct guesses: ${record.correctGuesses}. Incorrect guesses ${record.incorrectGuesses}`)
    } else {
        alert('You havent flip the coin yet')}

    coinflipped = ''
})

const resetRecord = document.getElementById("resetRecord");

resetRecord.addEventListener("click", () => {
    record = {
        correctGuesses: 0,
        incorrectGuesses: 0
    }

    alert(`Correct guesses: ${record.correctGuesses}. Incorrect guesses ${record.incorrectGuesses}`)
})