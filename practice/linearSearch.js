function linearSearch(a, key){
    for (let i=0; i<a.length; i++){
        if(a[i] == key){
            return i;
        }
    }
    return -1;
}
console.log(linearSearch([9, 6, 10, 13, 5], 13))