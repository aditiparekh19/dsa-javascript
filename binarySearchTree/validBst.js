var isValidBST = function (root) {
  let ans = null;
  let isBst = (curr, l, h) => {
    if (!curr) return true;

    if ((l != null && curr.val <= l) || (h != null && curr.val >= h))
      return false;

    let isLeftBst = isBst(curr.left, l, curr.val);
    let isRightBst = isBst(curr.right, curr.val, h);

    return isLeftBst && isRightBst;
  };
  ans = isBst(root, null, null);
  return ans;
};
// Example usage:
// [2,1,3]
let root = {
  val: 2,
  left: { val: 1, left: null, right: null },
  right: { val: 3, left: null, right: null },
};
console.log(isValidBST(root)); // Output: true
