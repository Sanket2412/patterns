const getDivisorsList=(a)=>{
    let divisorsList=[];
    for(let i=1;i<=Math.sqrt(a);i++){
        if(a%i===0){
            divisorsList.push(i);
            if(a/i!=i){
                divisorsList.push(a/i);
            }
        }
    }
    return divisorsList;
}

const divisorsList=getDivisorsList(36);
console.log("The divisors of 36 are: ",divisorsList);