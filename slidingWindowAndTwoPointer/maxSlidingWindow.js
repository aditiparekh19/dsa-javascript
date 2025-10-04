var maxSlidingWindow = function(a, k) {
    let i=0; let j=0;
    let q = []; let res = [];
    //push current element, after removing all smaller elements from last(back)
    while(j < a.length){
        while(q.length && a[j]> q[q.length-1]) {
            q.pop();
        }
        q.push(a[j]);
        
        //when window size is k
        if(j>=k-1){
            res.push(q[0]);
            //if leftmost element of current window is larget, remove
            a[i] == q[0] && q.shift();
            i++; 
        }
        j++;
    }
    return res;
};
console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)); // Output: [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // Output: [1]
console.log(maxSlidingWindow([1,-1], 1)); // Output: [1,-1]
console.log(maxSlidingWindow([9,11], 2)); // Output: [11]
console.log(maxSlidingWindow([4,-2], 2)); // Output: [4]
//Time complexity: O(n)
//Space complexity: O(k) as the queue can store at most k elements