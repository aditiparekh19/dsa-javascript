var preorderTraversal = function(root) {
    let res = [];
    function traversal(curr){
        if(!curr) return;
        res.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root);
    return res;
};
//Time complexity: O(n) as we visit each node once
//Space complexity: O(h) where h is the height of the tree, which is the space used by the recursion stack
class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}
let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(root)); // Output: [1, 2, 3]
console.log(preorderTraversal(null)); // Output: []
console.log(preorderTraversal(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4)))); // Output: [1, 2, 3, 4]
console.log(preorderTraversal(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))))); // Output: [1, 2, 4, 5, 6, 7, 3, 8, 9]