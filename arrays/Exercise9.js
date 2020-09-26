let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function checkThree(arr) {
  return arr.includes(3);
}

console.log(checkThree(numbers1));
console.log(checkThree(numbers2));
console.log(checkThree(numbers3));