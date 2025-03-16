const recusiveFuntion = (i,n) => {
    if (i > n) {
        return;
    }
    console.log(i);
    recusiveFuntion(i+1,n);
}

const reverseRecusrsion=(n)=>{
    if(n <1)
        return;
    console.log(n);
    reverseRecusrsion(n-1);
}

const sumOfNNumbers=(n)=>{
    if(n===0)
        return 0;
    return n+sumOfNNumbers(n-1);
}

const factorial=(n)=>{
    if(n===0)
        return 1;
    return n*factorial(n-1);
}

const reverseArrayRecusion=(arr)=>{
    if(arr.length === 1)
    {
        return arr[0];
    }
    return reverseArrayRecusion(arr.slice(1)).concat(arr[0]);
}

recusiveFuntion(1,5);
reverseRecusrsion(5);
console.log(sumOfNNumbers(5));
console.log(factorial(5));