//addtocart
let cartQuantity = 0;

const showButton = document.getElementById("show");

showButton.addEventListener("click", () => {
    console.log('Cart quantity: ' + cartQuantity);
});

const atcButton = document.getElementById("atc");

atcButton.addEventListener("click", () => {
    
    if (cartQuantity >= 10) {
        alert('The cart is full');
    } else {cartQuantity = cartQuantity + 1
    console.log('Cart quantity: ' + cartQuantity);}
});

const twoButton = document.getElementById("plus2");

twoButton.addEventListener("click", () => {
    
    if (cartQuantity >= 9) {
        alert('The max limit of the cart is 10. The cart currently have ' + cartQuantity);
    } else {cartQuantity = cartQuantity + 2
    console.log('Cart quantity: ' + cartQuantity);}
});

const threeButton = document.getElementById("plus3");

threeButton.addEventListener("click", () => {
    
    if (cartQuantity >= 8) {
        alert('The max limit of the cart is 10. The cart currently have ' + cartQuantity);
    } else {cartQuantity = cartQuantity + 3
    console.log('Cart quantity: ' + cartQuantity);}
});

const rfcButton = document.getElementById("rfc");

rfcButton.addEventListener("click", () => {
    
    if (cartQuantity <= 0) {
        alert('Not enough items in the cart');
    } else {cartQuantity = cartQuantity - 1
    console.log('Cart quantity: ' + cartQuantity);}
});

const minusTwo = document.getElementById("minus2");

minusTwo.addEventListener("click", () => {
    
    if (cartQuantity <= 1) {
        alert('Not enough items in the cart');
    } else {cartQuantity = cartQuantity - 2
    console.log('Cart quantity: ' + cartQuantity);}
});

const minusThree = document.getElementById("minus3");

minusThree.addEventListener("click", () => {
    
    if (cartQuantity <= 2) {
        alert('Not enough items in the cart');
    } else {cartQuantity = cartQuantity - 3
    console.log('Cart quantity: ' + cartQuantity);}
});

const resetButton = document.getElementById("reset");

resetButton.addEventListener("click", () => {
    cartQuantity = 0
    console.log('Cart was reset');
    console.log('Cart quantity: ' + cartQuantity);
});

//addtocart

