import { TreeNode } from "./TreeNode.js";

var goodNodes = function(root) {
    let res = 0;
    let traversal = (curr, maxSeenSoFar) => {
        if(curr.val >= maxSeenSoFar) {
            ++res;
        }
        let currMax = Math.max(curr.val, maxSeenSoFar);
        curr.left && traversal(curr.left, currMax);
        curr.right && traversal(curr.right, currMax);
    }
    traversal(root, -Infinity);
    return res;
};

// Example usage:
// [3,1,4,3,null,1,5]
let root = new TreeNode(
    3,
    new TreeNode(1, new TreeNode(3)),
    new TreeNode(4, new TreeNode(1), new TreeNode(5))
);
console.log(goodNodes(root)); // 4