const printPattern = (n) => {
  for (let index = 0; index < n; index++) {
    for (let space1 = 0; space1 < n - index - 1; space1++) {
      process.stdout.write(" ");
    }
    for (let star = 0; star < index * 2 + 1; star++) {
      process.stdout.write("*");
    }
    for (let space1 = 0; space1 < n - index - 1; space1++) {
      process.stdout.write(" ");
    }
    process.stdout.write("\n");
  }
};

printPattern(5);
