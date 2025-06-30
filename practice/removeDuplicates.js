function removeDuplicates(a){
    let i=0;
    for(let j=1; j<a.length; j++){
        if (a[i] < a[j]){
            i++;
            a[i] = a[j];
        }
    }
    console.log(a);
    return i+1;
}
console.log(removeDuplicates([1,1,2]));