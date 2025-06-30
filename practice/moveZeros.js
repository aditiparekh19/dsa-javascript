function moveZeros(a){
    let i=0;
    for(let j=0; j<a.length; j++){
        if(a[j] !== 0){
            a[i] = a[j];
            i++;
        }
    }
    for(let j=i; j<a.length; j++){
        a[j] = 0;
    }
    return a;
}
console.log(moveZeros([0, 1, 0, 3, 12]))