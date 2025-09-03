var nextGreaterElements = function(nums) {
    let arr = [...nums, ...nums];
    let stack = [];
    let n = arr.length;
    let res = Array(n).fill(-1);

    stack.push(arr[n-1]);

    for(let i=n-2; i>=0; i--)
    {
        while(stack.length)
        {
            let top = stack[stack.length-1];
            if(arr[i] < top){
                res[i] = top;
                break;
            }
            else{
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }
    return res.slice(0, n/2);
};
// Example usage:
console.log(nextGreaterElements([1,2,1])); // [2,-1,2]
console.log(nextGreaterElements([5,4,3,2,1])); // [-1,5,5,5,5]
// Time complexity is O(n) where n is length of nums
// Space complexity is O(n) for stack and res array

var nextGreaterElements = function(arr) {
    let n = arr.length;
    let stack = [];
    let ans = Array(n).fill(-1);
    stack.push(arr[n-1]);
    for(let i=(2*n)-2; i >= 0; i--){
        while(stack.length){
            let top = stack[stack.length-1];
            if(arr[i % n] < top){
                ans[i % n] = top;
                break;
            } else{
                stack.pop();
            }
        }
        stack.push(arr[i % n]);
    }
    return ans.slice(0, n);
};
// Example usage:
console.log(nextGreaterElements([1,2,1])); // [2,-1,2]
console.log(nextGreaterElements([5,4,3,2,1])); // [-1,5,5,5,5]
// Time complexity is O(n) where n is length of arr
// Space complexity is O(n) for stack and ans array