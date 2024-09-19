const countDigit = (n) => {
  let temp = n,
    reverse = 0;
  counter = 0;
  while (temp > 0) {
    counter++;
    reverse = reverse * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  console.log(`Reverse number is ${reverse}`);
};

countDigit(10400);
