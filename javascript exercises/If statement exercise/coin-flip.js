let coinflipped = ''

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
        alert('You guessed heads, you are correct')
    } else if (coinflipped === 'tails') {
        alert('You guessed heads, you are wrong')
    } else {
        alert('You havent flip the coin yet')}

    coinflipped = ''
})

const tails = document.getElementById("tails");

tails.addEventListener("click", () => {
    if (coinflipped === 'tails') {
        alert('You guessed tails, you are correct')
    } else if (coinflipped === 'heads') {
        alert('You guessed tails, you are wrong')
    } else {
        alert('You havent flip the coin yet')}

    coinflipped = ''
})