var strStr = function (haystack, needle) {
  let m = haystack.length;
  let n = needle.length;

  let lps = [0];
  let i = 0;
  let j = 1;
  while (j < n) {
    if (needle[i] === needle[j]) {
      lps[j] = i + 1;
      i++;
      j++;
    } else {
      if (i == 0) {
        lps[j] = 0;
        j++;
      } else {
        i = lps[i - 1];
      }
    }
  }

  i = 0;
  j = 0;
  while (i < m) {
    if (haystack[i] === needle[j]) {
      i++;
      j++;
    } else {
      if (j == 0) i++;
      else {
        j = lps[j - 1];
      }
    }
    if (j === n) return i - n;
  }
  return -1;
};
console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log(strStr("leetcode", "leeto")); // Output: -1
//Time complexity: O(m+n)
//Space complexity: O(n)
