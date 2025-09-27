var findClosestElements = function (a, k, x) {
  let l = 0;
  let r = a.length - 1;
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (a[m + k] - x < x - a[m]) {
      l = m + 1;
    } else {
      r = m;
    }
  }
  return a.slice(l, l + k);
};
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, -1));
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 6));
console.log(findClosestElements([1, 3], 1, 2));
//Time complexity: O(log(n-k) + k)
//Space complexity: O(k)
