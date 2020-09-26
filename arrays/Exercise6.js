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