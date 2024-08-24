const printPattern = (n) => {
  let space = 2 * (n - 1);
  for (let index = 1; index <= n; index++) {
    for (let j = 1; j <= index; j++) {
      process.stdout.write(`${j}`);
    }
    for (let j = 1; j <= space; j++) {
      process.stdout.write(` `);
    }
    for (let j = index; j >= 1; j--) {
      process.stdout.write(`${j}`);
    }
    process.stdout.write("\n");
    space = space - 2;
  }
};

printPattern(5);
