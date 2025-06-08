// function Palindrome(num){
//     return num<0 ? false: num === +num.toString().split('').reverse().join('');
// }
// console.log(Palindrome(121));

// function PalindromeRecursion(input, start, end){
//     if(start >= end) 
//         return true;
//     if(input[start] != input[end])
//         return false;
//     return PalindromeRecursion(input, start+1, end-1) // 0,4 | 1,3 | 2,2
// }

function PalindromeTraditional(n){
    let initialNumber = n;
    if(initialNumber <= 9) return false;
    let reverse = 0;
    while(n > 0){
        let rem = n%10;
        reverse = (reverse*10) + rem;
        n = Math.floor(n/10);
    }
    return reverse === initialNumber;
}

// const input = 'LEVEL';
// console.log(PalindromeRecursion(input, 0, input.length-1));
console.log(PalindromeTraditional(121));