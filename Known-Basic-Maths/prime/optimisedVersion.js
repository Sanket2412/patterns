const checkPrimeNumber=(a)=>{
    let cnt=0;
    const temp=a;
    for(let i=1;i <= Math.sqrt(a);i++){
        if(temp%i==0){
            cnt++;
            if(i!=(temp/i)){
                cnt++;
            }
        }
    }
    return cnt===2;
}

const isPrimeNumber=checkPrimeNumber(2);
console.log("Is 2 Prime Number:",isPrimeNumber ? "Yes" : "No");