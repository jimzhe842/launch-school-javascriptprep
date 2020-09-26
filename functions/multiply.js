let { question } = require('readline-sync');

let askFirstNumber = () => question('First number ');
let askSecondNumber = () => question('Second number ');

let firstNumber = Number(askFirstNumber());
let secondNumber = Number(askSecondNumber());

console.log(`${firstNumber} * ${secondNumber}  = ${firstNumber * secondNumber}`);
