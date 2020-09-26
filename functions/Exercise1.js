let bar = 1;
function foo() {
  let bar = 2;
}

foo();
console.log(bar);

// This will log 1 since bar is still 1 and has not been modified in the scope of the console.log