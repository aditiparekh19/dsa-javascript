var search = function (a, target) {
  let l = 0;
  let r = a.length - 1;
  while (l <= r) {
    let m = Math.floor(l + (r - l) / 2);

    if (a[m] === target) return m;

    if (a[m] >= a[l]) {
      //left sorted
      if (target >= a[l] && target < a[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > a[m] && target <= a[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
};
search([4,5,6,7,0,1,2],0) // 4
search([4, 5, 6, 7, 0, 1, 2], 3);  // -1
search([1], 0); // -1
search([1, 3], 3); // 1
search([5, 1, 3], 3); // 2
search([3, 1], 1); // 1

//Time complexity: O(log n)
//Space complexity: O(1)