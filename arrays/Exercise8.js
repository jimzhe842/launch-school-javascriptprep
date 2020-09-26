let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
  return arr.reduce(
    (accumulator,value) => {
      if (value.length % 2 === 1) {
        accumulator.push(value.length)
      }
      return accumulator
    },[]);
}

console.log(oddLengths(arr)); // => [1, 5, 3]