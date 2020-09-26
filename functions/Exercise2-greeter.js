let rlSync = require('readline-sync');
let askFirstName = () => rlSync.question('What is your first name? ');
let askLastName = () => rlSync.question('What is your last name? ');

let firstName = askFirstName();
let lastName = askLastName();
console.log(`Hello, ${firstName} ${lastName}!`);