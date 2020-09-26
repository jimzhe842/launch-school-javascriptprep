let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));

const INCREMENT = 10;
console.log(`You are ${age} years old.`);

for (let i = 1; i <= 4; i ++) {
  let years = i * INCREMENT;
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}