const printPattern = (n) => {
  for (let index = 0; index < 2 * n - 1; index++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = index;
      let left = j;
      let right = 2 * n - 2 - j;
      let down = 2 * n - 2 - index;

      process.stdout.write(
        `${(
          n - Math.min(Math.min(top, down), Math.min(left, right))
        ).toString()}`
      );
    }
    process.stdout.write("\n");
  }
};

printPattern(4);
