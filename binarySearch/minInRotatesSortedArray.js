var findMin = function(a) {
    let l = 0;
    let r = a.len-1;
    while(l < r){
        let m = l + Math.floor((r-l)/2);
        if (a[m] < a[m-1] && a[m] < a[m+1]) return m;
        if(a[m-1] > a[m+1]){
            l = m;
        }
        else{
            r = m;
        }
    }
    return -1;
};
console.log(findMin([3,4,5,1,2]));