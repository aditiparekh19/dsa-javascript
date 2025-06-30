function reverseInt(n){
    let nCopy = n;
    n = Math.abs(n);
    let rev = 0;
    while(n>0){
        let last = n%10;
        console.log(last);
        rev = rev*10+last;
        n = Math.floor(n/10);
        console.log(n);
    }
    return  nCopy < 0 ? -rev : rev;
}
console.log(reverseInt(1214))