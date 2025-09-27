var singleNonDuplicate = function(a) {
    let l = 0;
    let r = a.length - 1;
    while(l<=r){
        let m = l + Math.floor((r-l)/2);
        // pair exists on left
        if(a[m] === a[m-1]){
            let leftCount = m-1-l;
            if(leftCount % 2 === 1) //odd
            {
                r = m - 2;
            }
            else{
                l = m + 1;
            }
        }
        else if(a[m] === a[m+1]){
            let leftCount = m-l;
            if(leftCount % 2 === 1) //odd
            {
                r = m - 1;
            }
            else{
                l = m + 2;
            }
        }
        else{
            return a[m];
        }
    }
    return -1;
};
console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]));
console.log(singleNonDuplicate([3,3,7,7,10,11,11]));
//Time complexity: O(log n)
//Space complexity: O(1)