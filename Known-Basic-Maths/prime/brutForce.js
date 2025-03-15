const checkPrimeNumber=(a)=>{
    let isPrime=true;
    for(let i=2;i<a;i++){
        if(a%i==0){
            isPrime=false;
            break;
        }
    }
    return isPrime;
}

const isPrimeNumber=checkPrimeNumber(10);
console.log("Is 10 Prime Number:",isPrimeNumber ? "Yes" : "No");