let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArr = Object.keys(obj);
newArr = newArr.map(key => key.toUpperCase());
console.log(obj);
console.log(newArr);