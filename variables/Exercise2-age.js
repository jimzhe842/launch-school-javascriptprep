let age = 20;
const INCREMENT = 10;
console.log(`You are ${age} years old.`);

for (let i = 1; i <= 4; i ++) {
  let years = i * INCREMENT;
  console.log(`In ${years} years, you will be ${age + years} years old.`);
}