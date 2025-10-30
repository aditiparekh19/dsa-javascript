var connect = function(root) {
    if(!root) return root;
    let traversal = (curr) => {
        if(curr.left) {
            curr.left.next = curr.right;
        }
        if(curr.right && curr.next) {
            curr.right.next = curr.next.left;
        }
        curr.left && traversal(curr.left);
        curr.right && traversal(curr.right);
    }
    traversal(root);
    return root;
};
// Example usage:
//      1 -> null
//    /   \
//   2 ->  3 -> null
//  / \    / \
// 4->5-> 6->7 -> null
// [1,2,3,4,5,6,7]
let root = {
    val: 1,
    left: { val: 2, left: { val: 4, left: null, right: null, next: null }, right: { val: 5, left: null, right: null, next: null }, next: null },
    right: { val: 3, left: { val: 6, left: null, right: null, next: null }, right: { val: 7, left: null, right: null, next: null }, next: null },
    next: null
};
console.log(connect(root)); // The tree nodes will have their 'next' pointers populated accordingly.
