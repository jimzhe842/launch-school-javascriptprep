let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  let lengths = arr.map(value => {
    return value.length;
  })
  return lengths.filter(value => {
    return value % 2 === 1;
  })
}




console.log(oddLengths(arr)); // => [1, 5, 3]

let numbers = [1, 3, 5];

function sumOfSquares(arr) {
  return arr.reduce((accumulator,value) => accumulator + (value ** 2),0);
}

console.log(sumOfSquares(numbers)); // => 35




let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths2(arr) {
  return arr.reduce((accumulator,value) => {
    let length = value.length;
    if (length % 2 === 1) {      
      accumulator.push(length);
    }
    return accumulator;
  },[]);
}

console.log(oddLengths2(arr2)); // => [1, 5, 3]