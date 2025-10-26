import { TreeNode } from "./TreeNode.js";

var diameterOfBinaryTree = function(root) {
    let maxDiameter = 0;
    let findDepth = (curr) => {
        let leftDepth = curr.left && findDepth(curr.left);
        let rightDepth = curr.right && findDepth(curr.right);

        let currDiameter = leftDepth + rightDepth;
        maxDiameter = Math.max(currDiameter, maxDiameter);

        return 1 + Math.max(leftDepth, rightDepth);
    }
    findDepth(root);
    return maxDiameter;
};
console.log(diameterOfBinaryTree(null)); // Output: 0
console.log(diameterOfBinaryTree(new TreeNode(1)));  // Output: 0
console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // Output: 2
console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null))); // Output: 3
console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(5)))); // Output: 4
console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2, new TreeNode(3, new TreeNode(4), null), null), null))); // Output: 4
console.log(diameterOfBinaryTree(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(6, null, new TreeNode(7)))))); // Output: 6