import { TreeNode } from "./TreeNode.js";

//Recursive
var isSymmetric = function(root) {
    var isMirror = (p1, p2) => {
        if(!p1 && !p2) return true;
        if(!p1 || !p2) return false;
        return p1.val === p2.val &&
        isMirror(p1.left, p2.right) &&
        isMirror(p1.right, p2.left);
    }
    return isMirror(root.left, root.right);
};

//Iterative
var isSymmetric = function(root) {
    if(!root) return true;
    let q = [root.left, root.right];
    while(q.length){
        let p1 = q.shift();
        let p2 = q.shift();
        if(!p1 && !p2) continue;
        if(!p1 || !p2) return false;
        if(p1.val != p2.val) return false;
        q.push(p1.left, p2.right);
        q.push(p1.right, p2.left);
    }
    return true;
};

console.log(isSymmetric(null)); // Output: true
console.log(isSymmetric(new TreeNode(1)));  // Output: true
console.log(isSymmetric(new TreeNode(1, new TreeNode(2), new TreeNode(2)))); // Output: true
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, null, new TreeNode(3)), new TreeNode(2, null, new TreeNode(3))))); // Output: false
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3))))); // Output: true
console.log(isSymmetric(new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(3), new TreeNode(4))))); // Output: false