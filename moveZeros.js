function moveZeros(a){
    let x=0;
    for(let i=0; i<a.length; i++) {
        if(a[i] !== 0){
            a[x] = a[i];
            x++;
        }
    }
    for(let i=x; i<a.length; i++){
        a[i] = 0;
    }
    return a;
}
console.log(moveZeros([0,1,0,3,12]));