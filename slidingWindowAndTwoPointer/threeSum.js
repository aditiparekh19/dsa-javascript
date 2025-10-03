var threeSum = function (arr) {
  let res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i - 1]) {
      twoSum(arr, i, res);
    }
  }
  return res;
};

var twoSum = function (a, x, res) {
  let i = x + 1;
  let j = a.length - 1;
  while (i < j) {
    let sum = a[i] + a[j] + a[x];
    if (sum > 0) j--;
    else if (sum < 0) i++;
    else {
      res.push([a[i], a[j], a[x]]);
      i++;
      j--;
      while (i < j && a[i] === a[i - 1]) {
        i++;
      }
    }
  }
};

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // Output: []
console.log(threeSum([0, 0, 0])); // Output: [[0,0,0]]
//Time complexity: O(n^2)
//Space complexity: O(1)
