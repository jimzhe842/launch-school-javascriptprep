let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(array) {
  return array.filter(element => (typeof element === 'number' && element % 1 === 0));
}

function removeNonInteger2(array) {
  return array.filter(Number.isInteger);
}

let newArray = removeNonInteger(array);
console.log(newArray); // => [1, 3, -4]
 

