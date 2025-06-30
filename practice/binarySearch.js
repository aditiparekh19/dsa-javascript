function binarySearch(a, key){
    let left = 0;
    let right = a.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(key === a[mid]) return mid;
        else if(key < a[mid]){
            right = mid-1;
        }
        else if(key > a[mid]){
            left = mid+1;
        }
    }
    return -1;
}
console.log(binarySearch([9,6,10,13,5], 13))