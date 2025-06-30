function insertionSort(a){
    for(let i=1; i<a.length; i++){
        let curr = a[i];
        let p = i-1;
        while(curr < a[p] && p>=0){
            a[p+1] = a[p];
            p--;
        }
        a[p+1] = curr;
    }
    return a;
}
console.log(insertionSort([4,5,1,3,9]))