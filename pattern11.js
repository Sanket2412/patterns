const printPattern = (n) => {
  let start = 1;
  for (let index = 0; index < n; index++) {
    if (index % 2 === 0) start = 1;
    else start = 0;
    for (let j = 0; j <= index; j++) {
      process.stdout.write(`${start}`);
      start = 1 - start;
    }
    process.stdout.write("\n");
  }
};

printPattern(5);
