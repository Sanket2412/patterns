function printPattern(n) {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
      row += String.fromCharCode(65 + j) + " ";
    }
    process.stdout.write(row);
    process.stdout.write("\n");
  }
}
printPattern(5);
