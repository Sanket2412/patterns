const printPattern = (n) => {
  let num = 1;
  for (let index = 1; index <= n; index++) {
    for (let j = 1; j <= index; j++) {
      process.stdout.write(`${num} `);
      num = num + 1;
    }
    process.stdout.write("\n");
  }
};

printPattern(5);
