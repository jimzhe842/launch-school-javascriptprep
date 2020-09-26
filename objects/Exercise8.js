let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

console.log(foo.a);
console.log(qux);

// It should log 'hi' and 'hello'
// foo's element 'a' is mutated
// However since qux is passed in as a primitive and 'argument2' is a parameter variable (it will not affect qux in the higher scope)