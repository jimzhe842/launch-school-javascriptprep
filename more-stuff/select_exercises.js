let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

function allMatches(words, regex) {
  let filteredResults = words.filter(word => {
    return regex.test(word);
  })
  console.log(filteredResults);
}

allMatches(words, /lab/); // ['laboratory', 'flab', 'elaborate']

function numberIsNaN(number) {
  return number.toString() === 'NaN';
}

console.log(numberIsNaN(5/0));
console.log(numberIsNaN(0/0));
console.log(numberIsNaN(12/5));
console.log(numberIsNaN(2));
console.log(numberIsNaN(NaN));

function numberIsNegativeZero(number) {
  return (1/number) === -Infinity;
}

console.log(numberIsNegativeZero(-0));

console.log(numberIsNegativeZero(0));
console.log(numberIsNegativeZero(10));