let number = 4936;
let remainder = number % 10;

console.log(`ones place is: ${remainder}`);

number = (number - remainder) / 10;
remainder = number % 10;
console.log(`tens place is: ${remainder}`);

number = (number - remainder) / 10;
remainder = number % 10;
console.log(`tens place is: ${remainder}`);

number = (number - remainder) / 10;
remainder = number % 10;
console.log(`tens place is: ${remainder}`);
