import { TreeNode } from "./TreeNode.js";

var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let res = [];
  let q = [root];
  let level = 0;
  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      if (level % 2 == 0) {
        levelArr.push(curr.val);
      } else {
        levelArr.unshift(curr.val);
      }
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    res.push(levelArr);
    level++;
  }
  return res;
};
console.log(zigzagLevelOrder(null)); // Output: []
console.log(zigzagLevelOrder(new TreeNode(1))); // Output: [[1]]
console.log(zigzagLevelOrder(new TreeNode(1, new TreeNode(2), new TreeNode(3)))); // Output: [[1],[3,2]]
console.log(zigzagLevelOrder(new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7))))); // Output: [[1],[3,2],[4,5,6,7]]
console.log(zigzagLevelOrder(new TreeNode(1, new TreeNode(2, null, new TreeNode(4)), new TreeNode(3, null, new TreeNode(5))))); // Output: [[1],[3,2],[4,5]]