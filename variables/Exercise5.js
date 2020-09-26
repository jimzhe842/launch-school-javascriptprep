let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);

// Logs 'bar' since 'bar' is what was assigned to foo in the scope of the console.log