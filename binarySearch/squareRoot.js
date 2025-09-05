var mySqrt = function(x) {
    if(x<2) return x;
    let l = 2;
    let r = Math.floor(x/2);

    while(l<=r){
        //let mid = Math.floor((l+r)/2); // can lead to data overflow, integer overflow in some languages
        //Better way to calculate mid
        let mid = l + Math.floor((r-l)/2);
        if(x == mid**2) return mid;
        if(x < mid**2) {
            r = mid-1;
        }
        else{
            l = mid+1;
        }
    }
    return r;
};
// Example usage:
console.log(mySqrt(4)); // Output: 2
console.log(mySqrt(16)); // Output: 4
console.log(mySqrt(1)); // Output: 1

// Time complexity is O(log x)
// Space complexity is O(1)
// Linear Search Approach - Time complexity O(n/2) => O(n), Space complexity O(1)