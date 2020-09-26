function doSomething(string) {
  return string.split(' ').reverse().map((value) => value.length);
}

// The following function takes in a string, splits the string into an array based on spaces, reverses the elements in the array
// The it returns a new array consisting of the length of the numbers in the previous array

let string = "Hello world!";
console.log(doSomething(string));