function isNotANumber(number) {
  return number !== number ? true : false;
}

console.log(isNotANumber(NaN));
console.log(isNotANumber(0));
console.log(isNotANumber(1));