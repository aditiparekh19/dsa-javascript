import { TreeNode } from "./TreeNode.js";

//TopDown
var hasPathSum = function(root, targetSum) {
    if(!root) return 0;
    let res = false;
    let tarversal = (curr, currSum) => {
         let newSum = currSum + curr.val;
        if(!curr.left && !curr.right) {
            if(newSum === targetSum) {
                res = res || true;
            }
        }
        curr.left && tarversal(curr.left, newSum);
        curr.right && tarversal(curr.right, newSum)
    }
    tarversal(root, 0);
    return res;
};

//BottomUp
var hasPathSum = function(root, targetSum) {
    if(!root) return 0;
    if(!root.left && !root.right){
        return root.val === targetSum;
    }
    let leftSum = hasPathSum(root.left, targetSum-root.val);
    let rightSum = hasPathSum(root.right, targetSum-root.val);
    return leftSum || rightSum;
};

console.log(hasPathSum(null, 0)); // Output: false
console.log(hasPathSum(new TreeNode(1), 1)); // Output: true
console.log(hasPathSum(new TreeNode(1, new TreeNode(2), new TreeNode(3)), 3)); // Output: true
console.log(hasPathSum(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4)), 6)); // Output: true
console.log(hasPathSum(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))), 18)); // Output: true
console.log(hasPathSum(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))), 14)); // Output: false