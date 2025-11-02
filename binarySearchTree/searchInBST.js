var searchBST = function(root, val) {
    let res = null;
    let traversal = (curr) => {
        if(curr.val === val) res = curr;
        else if (curr.val < val){
            curr.right && traversal(curr.right);
        }
        else{
            curr.left && traversal(curr.left);
        }
    }
    traversal(root);
    return res;
};

var searchBST = function(root, val) {
    if(!root) return root;

    if(root.val === val) return root;
    
    return root.val < val ? 
        searchBST(root.right, val) :
        searchBST(root.left, val);
};

// Example usage:
// [4,2,7,1,3], val = 2
let root = {
    val: 4,
    left: {
        val: 2,
        left: { val: 1, left: null, right: null },
        right: { val: 3, left: null, right: null }
    },
    right: { val: 7, left: null, right: null }
};
console.log(searchBST(root, 2)); // Output: Subtree rooted with node value 2
console.log(searchBST(root, 5)); // Output: null