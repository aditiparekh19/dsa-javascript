function missingNumber(a){
    a.sort((a,b) => a-b);
    if(a[0] !== 0) return 0;
    for(let i=1; i<a.length; i++){
        if(a[i] !== a[i-1]+1){
            return a[i-1]+1;
        }
    }
    return a.length;
}
console.log(missingNumber([3,0,1]))

function missingNumberFormula(a){
    let n = a.length;
    total = n*(n+1)/2;
    let sum = a.reduce((acc, curr) => {
        acc = acc + curr;
        return acc;
    },0);
    return total-sum;
}
console.log(missingNumberFormula([2,4,3,0,1]))