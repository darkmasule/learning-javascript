//addtocart
let cartQuantity = 0;

const showButton = document.getElementById("show");

showButton.addEventListener("click", () => {
    console.log('Cart quantity: ' + cartQuantity);
});

const atcButton = document.getElementById("atc");

atcButton.addEventListener("click", () => {
    cartQuantity = cartQuantity + 1
    console.log('Cart quantity: ' + cartQuantity);
});

const twoButton = document.getElementById("plus2");

twoButton.addEventListener("click", () => {
    cartQuantity = cartQuantity + 2
    console.log('Cart quantity: ' + cartQuantity);
});

const threeButton = document.getElementById("plus3");

threeButton.addEventListener("click", () => {
    cartQuantity = cartQuantity + 3
    console.log('Cart quantity: ' + cartQuantity);
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    cartQuantity = cartQuantity * 0
    console.log('Cart was reset');
    console.log('Cart quantity: ' + cartQuantity);
});

//addtocart

//health
let userHealth = 100;

if (userHealth > 100) {
    userHealth = 100
} else if (userHealth < 0) {
    alert('You died');
}

const plus10Button = document.getElementById("health10");

plus10Button.addEventListener("click", () => {
    userHealth = userHealth + 10
    console.log(userHealth);
})

const plus25Button = document.getElementById("health25");

plus25Button.addEventListener("click", () => {
    userHealth = userHealth + 25
    console.log(userHealth);
})

const plus50Button = document.getElementById("health50");

plus50Button.addEventListener("click", () => {
    userHealth = userHealth + 50
    console.log(userHealth);
})

const plus10Button = document.getElementById("health10");

plus10Button.addEventListener("click", () => {
    userHealth = userHealth + 10
    console.log(userHealth);
})

const plus25Button = document.getElementById("health25");

plus25Button.addEventListener("click", () => {
    userHealth = userHealth + 25
    console.log(userHealth);
})

const plus50Button = document.getElementById("health50");

plus50Button.addEventListener("click", () => {
    userHealth = userHealth + 50
    console.log(userHealth);
})


//health