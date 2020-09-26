let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

// Snippet 1

Object.keys(myObj).forEach(function(key) {
  console.log(key);
});

// Snippet 2

for (let key in myObj) {
  console.log(key);
}

// They wouldn't produce the same input because Object.keys only iterates on the keys of the object
// The for loop will include any key values from assigned objects