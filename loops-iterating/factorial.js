function factorial(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  return product;
}

function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n-1);
}

console.log(factorial(5));

console.log(factorialRecursive(6));