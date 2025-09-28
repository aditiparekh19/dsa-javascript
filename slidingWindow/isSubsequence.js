var isSubsequence = function (s, t) {
  let i = 0;
  j = 0;
  while (i < t.length) {
    // if(t[i] === s[j]){
    //     i++; j++;
    // }
    // else if(t[i] != s[j]) i++;
    if (t[i] === s[j]) {
      j++;
    }
    i++;
  }
  //return j < s.length ? false : true;
  return j === s.length;
};
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
//Time complexity: O(n)
//Space complexity: O(1)
