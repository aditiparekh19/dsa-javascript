var isSameTree = function(p, q) {
    if(!p && !q) return true;
    if(!p || !q) return false;
    return p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right);
};

console.log(isSymmetric(null)); // Output: true
console.log(isSymmetric(new TreeNode(1)));  // Output: true
console.log(isSymmetric(new TreeNode(1, new TreeNode(2), new TreeNode(2)))); // Output: true
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3))))); // Output: false
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3))))); // Output: true
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(3), new TreeNode(4))))); // Output: false