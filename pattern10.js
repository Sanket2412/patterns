const printPattern = (n) => {
  for (let index = 0; index <= n; index++) {
    for (let j = 0; j < index; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
  for (let i = n-1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
};

printPattern(5);
