var maxPathSum = function(root) {
    let maxSumPath = -Infinity;
    let traversal = (curr) => {
        if(!curr) return null;
        let maxLeft = Math.max(0, curr.left && traversal(curr.left));
        let maxRight = Math.max(0, curr.right && traversal(curr.right));
        currMax = curr.val + maxLeft + maxRight;
        maxSumPath = Math.max(currMax, maxSumPath);

        return curr.val + Math.max(maxLeft, maxRight);
    }
    traversal(root);
    return maxSumPath;
};
// Example usage:
// [-10,9,20,null,null,15,7]
let root = {
    val: -10,
    left: { val: 9, left: null, right: null },
    right: { val: 20, left: { val: 15, left: null, right: null }, right: { val: 7, left: null, right: null } }
};
console.log(maxPathSum(root)); // Output: 42