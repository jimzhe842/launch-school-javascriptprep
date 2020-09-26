const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO);

// This will not output an error since the const FOO in the block scope will not reassiagn a constant variable
// This is due to the fact that const FOO = 'qux' is declared in another block;