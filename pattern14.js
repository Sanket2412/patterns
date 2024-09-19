const printPattern = (n) => {
  for (let index = 1; index <= n; index++) {
    let row = "";
    for (let j = 0; j < index; j++) {
      row += String.fromCharCode(65 + j) + " ";
    }
    process.stdout.write(row);
    process.stdout.write("\n");
  }
};

printPattern(5);
