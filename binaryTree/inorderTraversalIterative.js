import { TreeNode } from "./TreeNode.js";

var inorderTraversal = function(root) {
    let res=[]; let stack=[];
    let curr = root;
    while(curr || stack.length){
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.val);
        curr = curr.right;
    }
    return res;
};
console.log(inorderTraversal(null)); // Output: []
console.log(inorderTraversal(new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null)))); // Output: [1,3,2]
console.log(inorderTraversal(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4)))); // Output: [3,2,1,4]
console.log(inorderTraversal(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))))); // Output: [4,2,6,5,7,1,3,9,8]
//Time complexity: O(n) as we visit each node once
//Space complexity: O(h) where h is the height of the tree, which is the space used by the recursion stack