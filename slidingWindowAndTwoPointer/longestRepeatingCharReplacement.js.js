var characterReplacement = function (a, k) {
  let i = (j = 0);
  let map = {};
  map[a[0]] = 1;
  let maxWindow = 0;
  while (j < a.length) {
    if (isWindowValid(map, k)) {
      maxWindow = Math.max(maxWindow, j - i + 1);
      j++;
      map[a[j]] = map[a[j]] ? map[a[j]] + 1 : 1;
    } else {
      map[a[i]]--;
      i++;
    }
  }
  return maxWindow;
};

var isWindowValid = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let k in map) {
    totalCount += map[k];
    maxCount = Math.max(maxCount, map[k]);
  }
  return totalCount - maxCount <= k;
};
console.log(characterReplacement("ABAB", 2)); // Output: 4
console.log(characterReplacement("AABABBA", 1)); // Output: 4
//Time complexity: O(n)
//Space complexity: O(1) as there are only 26 characters in the input string
