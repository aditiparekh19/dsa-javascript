function mergeSort(a){
    let n = a.length;
    if(n<=1) return a;
    let mid = Math.floor(n/2);
    let left = mergeSort(a.slice(0, mid));
    let right = mergeSort(a.slice(mid));
    return mergeSortedArrays(left, right);
}

function mergeSortedArrays(l,r){
    let i=0,j=0;
    let res = [];
    while(i<l.length && j<r.length){
        if(l[i] < r[j]){
            res.push(l[i++]);
        }
        else{
            res.push(r[j++]);
        }
    }
    return [...res, ...l.slice(i), ...r.slice(j)];
}

console.log(mergeSort([4,5,1,3,9]))