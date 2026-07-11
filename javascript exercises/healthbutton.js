//health
let userHealth = 100;

const plus10Button = document.getElementById("health10");

plus10Button.addEventListener("click", () => {
    userHealth = userHealth + 10
    if (userHealth > 100) {
    userHealth = 100
}
    console.log(userHealth);
})

const plus25Button = document.getElementById("health25");

plus25Button.addEventListener("click", () => {
    userHealth = userHealth + 25
    if (userHealth > 100) {
    userHealth = 100
}
    console.log(userHealth);
})

const plus50Button = document.getElementById("health50");

plus50Button.addEventListener("click", () => {
    userHealth = userHealth + 50
    if (userHealth > 100) {
    userHealth = 100
}
    console.log(userHealth);
})

const minus10Button = document.getElementById("minus10");

minus10Button.addEventListener("click", () => {
    userHealth = userHealth - 10
    if (userHealth <= 0) {
    userHealth = 0
    alert('You died');
}
    console.log(userHealth);
})

const minus25Button = document.getElementById("minus25");

minus25Button.addEventListener("click", () => {
    userHealth = userHealth - 25
    if (userHealth <= 0) {
    userHealth = 0
    alert('You died');
}
    console.log(userHealth);
})

const minus50Button = document.getElementById("minus50");

minus50Button.addEventListener("click", () => {
    userHealth = userHealth - 50
    if (userHealth <= 0) {
    userHealth = 0
    alert('You died');
}
    console.log(userHealth);
})

//health