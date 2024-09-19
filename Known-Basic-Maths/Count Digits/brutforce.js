const countDigit = (n) => {
  let temp = n,
    counter = 0;
  while (temp > 0) {
    counter++;
    temp = Math.floor(temp / 10);
  }
  console.log(`Total ${counter} digit are there`);
};

countDigit(12345);
