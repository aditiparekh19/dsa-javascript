var lowestCommonAncestor = function(root, p, q) {
    if(p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q)
    if(p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q)
    else {
        return root;
    }
};
// Example usage:
// [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
let root = {
    val: 6,
    left: {
        val: 2,
        left: { val: 0, left: null, right: null },
        right: {
            val: 4,
            left: { val: 3, left: null, right: null },
            right: { val: 5, left: null, right: null }
        }
    },
    right: {
        val: 8,
        left: { val: 7, left: null, right: null },
        right: { val: 9, left: null, right: null }
    }
};
let p = { val: 2, left: null, right: null };
let q = { val: 8, left: null, right: null };
console.log(lowestCommonAncestor(root, p, q)); // Output: Node with value 6