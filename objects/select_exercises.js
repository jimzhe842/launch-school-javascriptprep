let myProtoObj = {
  foo: 1,
  bar: 2
};

let myObj = Object.create(myProtoObj);

// for in iterates over even the prototypes
myObj.qux = 3;


function copyObj(objToCopy,keys) {
  let objCopy = {};
  if (keys) {
    for (let key in objToCopy) {
      if (keys.includes(key)) {
        objCopy[key] = objToCopy[key];
      }
    }
  } else {
    for (let key in objToCopy) {
      objCopy[key] = objToCopy[key];
    }
  }
  return objCopy;
}
let objToCopy = {
  foo: 1,
  bar: 2,
};

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined