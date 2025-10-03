var maxArea = function (a) {
  let i = 0;
  let j = a.length - 1;
  let maxWater = 0;
  while (i < j) {
    let area = Math.min(a[i], a[j]) * (j - i);
    maxWater = Math.max(maxWater, area);
    if (a[i] < a[j]) {
      i++;
    } else {
      j--;
    }
  }
  return maxWater;
};
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
//Time complexity: O(n)
//Space complexity: O(1)
