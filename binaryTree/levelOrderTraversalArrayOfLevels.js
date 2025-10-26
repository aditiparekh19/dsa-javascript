import { TreeNode } from "./TreeNode.js";

var levelOrder = function (root) {
  if (!root) return [];
  let q = [root];
  let res = [];
  while (q.length) {
    let levelArr = [];
    let levelSize = q.length;
    for (let i = 0; i < levelSize; i++) {
      let curr = q.shift();
      levelArr.push(curr.val);
      curr.left && q.push(curr.left);
      curr.right && q.push(curr.right);
    }
    res.push(levelArr);
  }
  return res;
};

var levelOrder = function(root) {
    if(!root) return [];
    let res = [];
    let traversal = (curr, level) => {
        if(!res[level]) res[level] = [];
        res[level].push(curr.val);
        curr.left && traversal(curr.left, level+1);
        curr.right && traversal(curr.right, level+1);
    }
    traversal(root, 0);
    return res;
};

let root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null));
console.log(levelOrder(root)); 
console.log(levelOrder(null));
console.log(
  levelOrder(
    new TreeNode(1, new TreeNode(2, new TreeNode(3), null), new TreeNode(4))
  )
);
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
);