var preorderTraversal = function(root) {
    if(!root) return [];
    let res = []; let s = [root];
    while(s.length) {
        let curr = s.pop();
        res.push(curr.val);
        curr.right && s.push(curr.right);
        curr.left && s.push(curr.left);
    }
    return res;
};
let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(preorderTraversal(root)); // Output: [1, 2, 3]
console.log(preorderTraversal(null)); // Output: []
console.log(preorderTraversal(new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4)))); // Output: [1, 2, 3, 4]
console.log(preorderTraversal(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5, new TreeNode(6), new TreeNode(7))), new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))))); // Output: [1, 2, 4, 5, 6, 7, 3, 8, 9]