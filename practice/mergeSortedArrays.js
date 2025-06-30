function mergeSortedArrays(a, b){
    let res = [];
    let i=0, j=0;
    while(i<a.length && j<b.length){
        if(a[i] < b[j]){
            res.push(a[i]);
            i++;
        }
        else{
            res.push(b[j]);
            j++;
        }
    }
    res.push(...a.slice(i), ...b.slice(j));
    return res;
}
console.log(mergeSortedArrays([0,4,5,7], [1,3,8,9]))

function mergeSortedArraysInPlace(n1, m, n2, n){
    let p1=m-1;
    let p2=n-1;
    for(let i=m+n-1; i>=0; i--){
        if(p2<0) break;
        if(p1>=0 && n1[p1]>n2[p2]){
            n1[i] = n1[p1--];
        }
        else{
            n1[i] = n2[p2--];
        }
    }
    return n1;
}
console.log(mergeSortedArraysInPlace([1,2,3,0,0,0], 3, [2,5,6], 3))