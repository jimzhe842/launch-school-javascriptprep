let evenOrOdd = number => {
  if (!(Number.isInteger(number))) {
    console.log('not a number value! please enter a number');
    return
  }
  number % 2 === 0 ? console.log('even') : console.log('odd');
}