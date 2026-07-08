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
    console.log(cartQuantity);
});

const threeButton = document.getElementById("plus3");

threeButton.addEventListener("click", () => {
    console.log(cartQuantity);
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    cartQuantity = cartQuantity * 0
    console.log('Cart quantity: ' + cartQuantity);
});


//addtocart