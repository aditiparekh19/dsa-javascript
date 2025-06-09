function sumofElementsInArray(n){
    if(n == 0) return arr[0];
    return arr[n] + sumofElementsInArray(n-1);
};
let arr = [1,5,6,7,8,2];
console.log(sumofElementsInArray(arr.length-1));