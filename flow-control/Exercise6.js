function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
   console.log('Empty');
  }
}

isArrayEmpty([]);   // [] is an empty Array


// This will output 'Not Empty' because an empty array is truthy