const getFactorsList=(a)=>{
    let factors=[]
    for(let i=1;i<=a;i++){
        if(a%i==0){
            factors.push(i)
        }
    }
    return factors
}
const findGCD=(a,b)=>{
const factorsA=getFactorsList(a);
const factorsB=getFactorsList(b);
let gcd=1;
for(let i=0;i < factorsA.length;i++){
    if(factorsB.includes(factorsA[i]) && factorsA[i] >= gcd){
        gcd=factorsA[i]
    }
}
    return gcd
}

let gcd=findGCD(20,15);
console.log("Gcd",gcd)