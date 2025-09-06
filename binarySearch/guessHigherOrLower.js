var guessNumber = function (n) {
  let l = 1;
  let r = n;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    let res = guess(m);
    if (res === 0) return m;
    else if (res < 0) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return -1;
};
// Time complexity is O(log n)
// Space complexity is O(1)
// Example usage:

function guess(num) {
  const pick = 6; // Example picked number
  if (num === pick) return 0;
  return num < pick ? 1 : -1;
}
console.log(guessNumber(10)); // Output: 6
// @param {number} num   your guess
// @return {number}      -1 if num is higher than the picked number
//                        1 if num is lower than the picked number
//                        otherwise return 0
// function guess(num) {}
// Linear Search Approach - Time complexity O(n), Space complexity O(1)
