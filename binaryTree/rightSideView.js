import { TreeNode } from "./TreeNode.js";

var rightSideView = function (root) {
  if (!root) return [];
  let q = [root];
  let res = [];
  while (q.length) {
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      i == 0 && res.push(curr.val);
      curr.right && q.push(curr.right);
      curr.left && q.push(curr.left);
    }
  }
  return res;
};

var rightSideView = function (root) {
  if (!root) return [];
  let res = [];

  let traversal = (curr, level) => {
    if (!curr) return;

    // If visiting this level for the first time, add the node value
    if (res[level] === undefined) res[level] = curr.val;

    // Visit right first
    traversal(curr.right, level + 1);
    traversal(curr.left, level + 1);
  };
};

// Example usage:
// [1,2,3,null,5,null,4]
let root = new TreeNode(
  1,
  new TreeNode(2, null, new TreeNode(5)),
  new TreeNode(3, null, new TreeNode(4))
);
console.log(rightSideView(root)); // [1,3,4]
