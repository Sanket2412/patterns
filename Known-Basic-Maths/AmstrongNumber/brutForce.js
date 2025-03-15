const getAmstrongNumber = (number) => {
    let sum = 0;
    let temp = number;
    const numberOfDigits = number.toString().length;
    while (temp > 0) {
        let remainder = temp % 10;
        sum += Math.pow(remainder,numberOfDigits);
        temp = parseInt(temp / 10);
    }
    return sum === number;
}
const isAmstrongNumber=getAmstrongNumber(9474);
console.log("Is 9474 an AmstrongNumber",isAmstrongNumber);