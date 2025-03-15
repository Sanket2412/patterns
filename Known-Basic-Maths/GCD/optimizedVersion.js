const findGCD=(a,b)=>{
    let gcd=1;
    for(let i=Math.min(a,b);i > 0 ; i--){
        if(a % i === 0 && b % i === 0){
            return i;
        }
    }
    return gcd
}

let gcd=findGCD(20,15);
console.log("Gcd",gcd)