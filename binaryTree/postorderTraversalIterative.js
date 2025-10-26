import { TreeNode } from "./TreeNode.js";

//Two Stack Approach
var postorderTraversal = function (root) {
  if (!root) return [];
  let res = [];
  let s1 = [root];
  let s2 = [];
  while (s1.length) {
    let curr = s1.pop();
    s2.push(curr);
    curr.left && s1.push(curr.left);
    curr.right && s1.push(curr.right);
  }
  while (s2.length) {
    res.push(s2.pop().val);
  }
  return res;
};

//One Stack Approach
var postorderTraversal = function (root) {
  let res = [];
  let s = [];
  let curr = root;
  let peek = null;
  let lastVisitedNode = null;
  while (curr || s.length) {
    while (curr) {
      s.push(curr);
      curr = curr.left;
    }
    peek = s[s.length - 1];
    if (peek.right && peek.right != lastVisitedNode) {
      curr = peek.right;
    } else {
      res.push(peek.val);
      lastVisitedNode = s.pop();
    }
  }
  return res;
};

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
console.log(postorderTraversal(null)); // Output: []
console.log(
  postorderTraversal(
    new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))
  )
); // Output: [3,2,1]
console.log(
  postorderTraversal(
    new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4))
  )
); // Output: [3,2,4,1]
console.log(
  postorderTraversal(
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5, new TreeNode(6), new TreeNode(7))
      ),
      new TreeNode(3, null, new TreeNode(8, new TreeNode(9), null))
    )
  )
); // Output: [4,6,7,5,2,9,8,3,1]
//Time complexity: O(n) as we visit each node once
//Space complexity: O(h) where h is the height of the tree, which is the space used by the recursion stack
