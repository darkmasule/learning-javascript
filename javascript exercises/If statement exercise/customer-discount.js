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