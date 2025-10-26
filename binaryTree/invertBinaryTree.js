import { TreeNode } from "./TreeNode.js";

var invertTree = function(root) {
    if(!root) return root;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

console.log(invertTree(null)); // Output: true
console.log(invertTree(new TreeNode(1)));  // Output: true
console.log(invertTree(new TreeNode(1, new TreeNode(2), new TreeNode(2)))); // Output: true
console.log(invertTree(new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3))))); // Output: false
console.log(invertTree(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3))))); // Output: true
console.log(invertTree(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(3), new TreeNode(4))))); // Output: false