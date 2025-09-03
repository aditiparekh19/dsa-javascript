var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let stack = [];
    let n = nums2.length;

    stack.push(nums2[n-1]);
    map[nums2[n-1]] = -1;

    for(let i=n-2; i>=0; i--){
        let top = stack[stack.length-1];
        if(nums2[i] < top){
            map[nums2[i]] = top
        }
        else{
            while(stack.length){
                if(stack[stack.length-1] < nums2[i]){
                    stack.pop();
                }
                else{
                    map[nums2[i]] = stack[stack.length-1];
                    break;
                }
            }
            if(!stack.length) map[nums2[i]] = -1;
        }
        stack.push(nums2[i]);
    }
    //return nums1.map(x => map[x]);
    let res = [];
    for(let i=0; i<nums1.length; i++){
        res.push(map[nums1[i]]);
    }
    return res;
}
// Example usage:
console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4])); // [3,-1]
// Time complexity is O(m+n) where m and n are lengths of nums1 and nums2 respectively
// Space complexity is O(n) for map and stack