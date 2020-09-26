let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(objToCopy, keys) {
  let copyObj = {};
  if (keys) {
    keys.forEach(key => copyObj[key] = objToCopy[key])
  } else {
    Object.keys(objToCopy).forEach(key => copyObj[key] = objToCopy[key]);
  }
  return copyObj;
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);    // => 1
console.log(newObj.bar);    // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);   // => 1
console.log(newObj2.bar);   // => undefined