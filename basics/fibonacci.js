//fib(0) = 0; fib(1) = 1;
//0+1+1+2+3+5+8+...

function FibRecursion(n){
    if(n<=1) return n;
    return FibRecursion(n-1) + FibRecursion(n-2)
}
console.log(FibRecursion(5));

// FibRecursion(5) - 3+2 = 5
// FibRecursion(4) - 2+1 = 3
// FibRecursion(3) - 1+1 = 2
// FibRecursion(2) - 1
// FibRecursion(1) - 1
// FibRecursion(0) - 0

function Fibonacci(n){
    let arr = [0, 1];
    for(let i=2; i<= n; i++)
    {
        arr.push(arr[i-2] + arr[i-1]);
    }
    return arr[n];
}
console.log(Fibonacci(5));