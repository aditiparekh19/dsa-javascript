function sumofOddNumbers(n){
    let isOdd = arr[n] % 2 != 0;
    if(n == 0){
        return isOdd ? arr[n] : 0;
    }
    return (isOdd ? arr[n] : 0) + sumofOddNumbers(n-1);
};
let arr = [4,1,3,6,9,7,15,2];
console.log(sumofOddNumbers(arr.length-1));