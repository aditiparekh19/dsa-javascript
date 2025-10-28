import { TreeNode } from "./TreeNode.js"; 

var isSubtree = function(root, subRoot) {
    let hashRoot = serialize(root);
    let hashSubRoot = serialize(subRoot);

    console.log(hashRoot);
    console.log(hashSubRoot);

    // Find substring - can use KMP

    return hashRoot.includes(hashSubRoot);
};

let serialize = function(root) {
    let hash = "";

    let traversal = (curr) => {
        if (!curr) {
            hash = hash + "-#";
            return;
        }
        hash = hash + "-" + curr.val ;
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root)
    return hash;
}

// Example usage:      
let root = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2, null, null)), new TreeNode(5));
let subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2));
console.log(isSubtree(root, subRoot)); // true
subRoot = new TreeNode(4, new TreeNode(1), new TreeNode(2, new TreeNode(0), new TreeNode(6)));
console.log(isSubtree(root, subRoot)); // false