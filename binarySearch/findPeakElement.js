var findPeakElement = function(a) {
    let l = 0;
    let r = a.length-1;
    while (l < r)
    {
        let m = l + Math.floor((r-l)/2);
        if(a[m + 1] > a[m] ) l = m + 1;
        else r = m;
    }
    return r;
};
//Example usage:
console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,3,4,5]));
//Time complexity: O(log n)
//Space complexity: O(1)