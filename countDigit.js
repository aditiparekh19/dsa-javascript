function countDigit(n){
    let count = 0;
    if (n < 0) n = n*(-1);
    if (n === 0) return 1;
    while(n > 0){
        n = Math.floor(n/10);
        count++;
    }
    return count;
}
console.log(countDigit(-259));
console.log(countDigit(1234567));