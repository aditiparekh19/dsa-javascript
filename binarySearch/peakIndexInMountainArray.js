var peakIndexInMountainArray = function(a) {
    let l=0;
    let r=a.length-1;
    while(l<r){
        let m = l + Math.floor((r-l)/2);
        if(a[m+1] > a[m]) l=m+1;
        else if(a[m+1] < a[m]) r=m;
    }
    return l;
};
console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,10,5,2]));
//Time complexity: O(log n)
//Space complexity: O(1)