const countDigit = (n) => {
  const counter = Number.parseInt(Math.log10(n) + 1);
  console.log(`Total ${counter} digit are there`);
};

countDigit(12345);
