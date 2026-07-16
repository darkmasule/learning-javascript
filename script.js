// line must always end in ;
// use camel notation in js, lowercase first word and all uppercase after that firstName, keyColor, lowerUpperCase
// variable always begin in let
  //let name = 'Elite';
// in js single colon '' is prefered
// variables are case sensitive. firstName and FirstName are different variables because of the upper and lower case f
// variables can't start with a number, 1name
// can't contain with a space or a hyfen (-)

//constant = const
// constant can't be change unlike variables. Use const if you don't want a variable to change
  //const interestRate = 1

//primitive/value tyeps: string, number, boolean, undefined, null
  //let firstName = 'Alan'; // String literal, always use colon on string
  //let age = 30; // Number literal
  //let isApprove = true; // boolean literal
  //let lastName; // Undefined literal
  //let selectNo = null; // null literal, 0 value, use to clear values of a variable

//reference type: object, array, function

// object literal. use curly braces
// key is the properties of the object
let firstPerson = {
    firstName: 'Josh',
    lastName: 'Kellen',
    age: 25
};

//ways to access the object
//dot notation
firstPerson.firstName = 'John'; // this is to change the property firstName of the object firstPerson

//bracket notanion
firstPerson['lastName'] = 'Alan';

console.log (firstPerson);
console.log (firstPerson.age);

//arrays. use to present a list of items
// arrays use square brackets
// index determine the position of the item in the list, it starts with zero, index use to access items on the array
let selectedNumber = [1, 2, 3, 4];
selectedNumber[4] = 5

console.log (selectedNumber);
console.log (selectedNumber[3]);

//function. Stores a code that can be use later
// function doesn't need a semicolon in the end of the line
function square(number) { // square is the name of the function and number is a parameter or a place holder for an input that's gonna be use inside the function
    console.log(number * number)
} 

function sum(a, b) {
  return a + b; // when using return use semicolon in the end
}

const charOrigHP = 100

function levelMod(level) {
  return level * .50;
}

function equipStat(armor, shield) {
  return armor + shield;
}

function currentHp() {
  console.log('The characters current hp is ' + (charOrigHP + levelMod(100) + equipStat(25, 10)))
}

currentHp()

// if statement
// ! not, use to reverse a boolean, eg. monday = true, !monday = false
// || or, only one statement needed to be true to run the code
// &&, need both statement to be true to run the code
// Example of using two if conditions in a same line; if (customerAge = 12 || customerAge = 20) {}

let customerAge = 66
let todayIsTuesday = false
let loyaltyCard = false

if(customerAge < 3) {
  console.log('Free')
} else if (todayIsTuesday) {
  console.log('$5')
} else if (customerAge <= 12 && loyaltyCard) {
  console.log('$3')
} else if (customerAge <= 12) {
  console.log('$5')
} else if (customerAge <= 17 && loyaltyCard) {
  console.log('$5')
} else if (customerAge <= 17) {
  console.log ('$7')
} else if (customerAge <= 64 && loyaltyCard) {
  console.log('$8')
} else if (customerAge <= 64) {
  console.log ('$10')
} else if (customerAge >= 65 && loyaltyCard) {
  console.log('$4')
} else {
  console.log ('$6')
}

//Ternary operator, shortcut ver of if statement

//const result = true ? 'truthy' : 'falsy'

//console.log(result);

//While, the code will continue to run while the condition inside the parenthesis is true

let count = 20

while (count >= 10) { // the code will continue to run while count is greater than 10
  console.log(count)
  count = count - 1 
}

//exercise for function and array

let users = ['Alex', 'Tom', 'Josh', 'John']

function signUp(username) {
  return users.push(username)
}

signUp('Allan')



console.log(users);