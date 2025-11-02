var insertIntoBST = function(root, val) {
    if(!root) return new TreeNode(val);

    if(root.val < val){
        root.right = insertIntoBST(root.right, val);
    }
    else{
        root.left = insertIntoBST(root.left, val);
    }
    return root;
};

class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

// Example usage:
// [4,2,7,1,3], val = 5
let root = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
    },
};
console.log(insertIntoBST(root, 5)); // Output: Tree with the new value inserted
console.log(insertIntoBST(null, 10)); // Output: TreeNode with value 10
