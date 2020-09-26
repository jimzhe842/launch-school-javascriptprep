let numbers = [1, 3, 5];

function sumOfSquares(arr) {
  return arr.reduce((accumulator,value) => accumulator + (value ** 2),0);
}

console.log(sumOfSquares(numbers)); // => 35