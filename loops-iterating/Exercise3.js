let counter = 0;

while (counter = 1) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// This code goes into an infinite loop because counter is always being reset to 1 for each iteration so it never meets
// the criteria on line 7
