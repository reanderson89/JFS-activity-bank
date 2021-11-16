// Create 4 functions that each perform a mathematical operation
// define two variables to use as arguments... EX: num1, num2
let num1 = 10;
let num2 = 5;


// function that adds
const sum = (a,b) => a + b;

console.log(sum(num1,num2));



// function that subtracts
const subtract = (a,b) => a - b;

console.log(subtract(num1,num2));



// function that multiplies
const multiply = (a,b) => a * b;

console.log(multiply(num1,num2));



// function that divides
const divide = (a,b) => a / b;

console.log(divide(num1,num2));




// BONUS! function that calculates the monthly cost of a car loan payment
// https://towardsdatascience.com/the-cost-of-financing-a-new-car-car-loans-c00997f1aee

const monthlyPayment = (amountBorrowed, interestRate, numPayments) => {
    let P = amountBorrowed;
    let r = interestRate/12;
    let n = numPayments;
    let numerator = r*((1+r)**n);
    let denominator = ((1+r)**n) - 1;
    return P * (numerator/denominator);

}

let myCarPayment = monthlyPayment(30000,.03 , 72);
console.log(myCarPayment);

























