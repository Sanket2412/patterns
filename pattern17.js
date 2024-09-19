const printPattern = (n) => {
  for (let index = 0; index < n; index++) {
    for (let j = 0; j < n; j++) {
      if (index === 0 || j === 0 || index === n - 1 || j === n - 1)
        process.stdout.write(`*`);
      else process.stdout.write(` `);
    }
    process.stdout.write("\n");
  }
};

printPattern(5);
