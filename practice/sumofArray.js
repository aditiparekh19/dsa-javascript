function sumofArray(n){
    let isOdd = a[n] % 2 !== 0;
    if(n==0) return isOdd ? 0 : a[0];
    return (isOdd ? 0 : a[n]) + sumofArray(n-1);
}
let a = [5,2,6,1,3];
console.log(sumofArray(a.length-1))