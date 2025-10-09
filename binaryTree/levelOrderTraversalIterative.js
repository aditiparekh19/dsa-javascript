var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let res = [];
  while (q.length) {
    let curr = q.shift();
    res.push(curr.val);
    curr.left && q.push(curr.left);
    curr.right && q.push(curr.right);
  }
  return res;
};
let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(levelOrder(root)); // Output: [1, 2, 3]
console.log(levelOrder(null)); // Output: []
console.log(
  levelOrder(
    new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4))
  )
); // Output: [1, 2, 3, 4]
console.log(
  levelOrder(
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
); // Output: [1, 2, 4, 5, 6, 7, 3, 8, 9]
