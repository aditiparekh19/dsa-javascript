var trap = function (a) {
  let n = a.length;

  //   let maxL = [];
  //   maxL[0] = a[0];
  //   for (let i = 1; i < a.length; i++) {
  //     maxL[i] = Math.max(maxL[i - 1], a[i]);
  //   }

  //   let maxR = [];
  //   maxR[n - 1] = a[n - 1];
  //   for (let i = n - 2; i >= 0; i--) {
  //     maxR[i] = Math.max(a[i], maxR[i + 1]);
  //   }

  let maxL = [];
  let maxR = [];
  maxL[0] = a[0];
  maxR[n - 1] = a[n - 1];
  for (let i = 1; i < a.length; i++) {
    maxL[i] = Math.max(maxL[i - 1], a[i]);
    maxR[n - i - 1] = Math.max(a[n - i - 1], maxR[n - i]); //a[n-i-1+1] = a[n-i]
  }

  let res = 0;
  for (let i = 0; i < n; i++) {
    let waterstored = Math.min(maxL[i], maxR[i]) - a[i];
    //res = res + (waterstored < 0 ? 0 : waterstored);
    res = res + Math.max(waterstored, 0);
  }
  return res;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
//Time complexity: O(n)
//Space complexity: O(n)
