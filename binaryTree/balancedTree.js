import { TreeNode } from "./TreeNode.js";

var isBalanced = function(root) {
    let res = true;
    let calculateHeight = (curr) => {
        if(!curr) return 0;
        let leftHeight = calculateHeight(curr.left);
        let rightHeight = calculateHeight(curr.right);
        if(Math.abs(leftHeight - rightHeight) > 1) {
            res = res && false;
        }
        return 1 + Math.max(leftHeight, rightHeight);
    }
    calculateHeight(root);
    return res;
};
console.log(isBalanced(null)); // Output: true
console.log(isBalanced(new TreeNode(1)));  // Output: true  
console.log(isBalanced(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // Output: true
console.log(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null))); // Output: false
console.log(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(3)))); // Output: true
console.log(isBalanced(new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), null), null), null))); // Output: false