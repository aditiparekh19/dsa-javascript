//factorial(5) => 5*4*3*2*1

function FactorialRecursion(n){
    if(n<=1) return 1;
    return n*FactorialRecursion(n-1);
}
console.log(FactorialRecursion(5));

// FactorialRecursion(5) - 5*24=120
// FactorialRecursion(4) - 4*6=24
// FactorialRecursion(3) - 3*2=6
// FactorialRecursion(2) - 2*1=2
// FactorialRecursion(1) - 1

function Factorial(n){
    let res = n;
    for(let i=1; i<n; i++)
    {
        res = res*(n-i); // 5*4*3*2*1
    }
    return res;
}
console.log(Factorial(5));