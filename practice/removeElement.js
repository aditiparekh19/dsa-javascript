function removeElement(a, val){
    if (a.length<=0) return 0;
    let i=0;
    for(let j=0; j<a.length; j++){
        if (a[j]!=val){
            a[i] = a[j];
            i++;
        }
    }
    console.log(a);
    return i;
}
console.log(removeElement([0,1,2,2,3,0,4,2], 2));