// TopDown 
var maxDepth = function(root) {
    if(!root) return 0;
    let maxDepth = 0;
    let traversal = (curr, depth) => {
        maxDepth = Math.max(maxDepth, depth);
        curr.left && traversal(curr.left, depth+1);
        curr.right && traversal(curr.right, depth+1);
    }
    traversal(root, 1);
    return maxDepth;
};

// BottomUp 
var maxDepth = function(root) {
    if(!root) return 0;
    let leftMax = maxDepth(root.left);
    let rightMax = maxDepth(root.right);
    return 1 + Math.max(leftMax, rightMax); 
};

console.log(maxDepth(null)); // Output: 0
console.log(maxDepth(new TreeNode(1))); // Output: 1
console.log(maxDepth(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // Output: 2
console.log(maxDepth(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4)))); // Output: 3
console.log(maxDepth(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))))); // Output: 4