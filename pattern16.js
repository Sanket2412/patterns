const printPattern = (n) => {
  for (let index = 0; index < n; index++) {
    let row = "";
    for (let j = 0; j <= index; j++) {
      row += String.fromCharCode(65 + index) + " ";
    }
    process.stdout.write(row);
    process.stdout.write("\n");
  }
};

printPattern(5);
