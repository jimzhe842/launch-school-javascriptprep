let myArray = {
  0: 'zero',
  1: 'one',
  2: 'two',
  length: 3, // You need a length
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
}