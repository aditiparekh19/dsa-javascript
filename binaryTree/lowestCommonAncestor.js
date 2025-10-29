import { TreeNode } from "./TreeNode.js";

var lowestCommonAncestor = function(root, p, q) {
    let lca = null;
    let traversal = (curr) => {
        let count = 0;
        if(!curr) return 0;
        let left = traversal(curr.left);
        let right = traversal(curr.right);

        if(curr.val === p.val || curr.val === q.val){
            count++;
        }
        count = count + left + right;
        if(count === 2 && !lca) {
            lca = curr;
        }
        return count;
    }
    traversal(root);
    return lca;
};

// Example usage:
// [3,5,1,6,2,0,8,null,null,7,4]
let root = new TreeNode(3, 
    new TreeNode(5, 
        new TreeNode(6),
        new TreeNode(2, 
            new TreeNode(7), 
            new TreeNode(4)
        )
    ),
    new TreeNode(1,
        new TreeNode(0),
        new TreeNode(8)
    )
);
let p = 5;
let q = 1;
console.log(lowestCommonAncestor(root, new TreeNode(p), new TreeNode(q)).val); // 3
