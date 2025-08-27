var isAlpha = function (ch) {
  return /^[a-z0-9]+$/i.test(ch);
};

var isPalindrome = function (s) {
  let orgStr = "";
  for (let i = 0; i < s.length; i++) {
    if (isAlpha(s[i])) {
      orgStr += s[i].toLowerCase();
    }
  }

  let strArray = orgStr.split("");
  let n = strArray.length;
  for (let i = 0; i < n / 2; i++) {
    let tmp = strArray[i];
    strArray[i] = strArray[n - 1 - i];
    strArray[n - 1 - i] = tmp;
  }
  let reversedStr = strArray.join("");

  return orgStr === reversedStr;
};
console.log(isPalindrome("0P")); //T=O(n), S=O(n) because of split and join
//console.log(isPalindrome(""));

var isPalindrome = function (s) {
  s = s.toLowerCase();
  let filteredString = "";
  let rev = "";
  for (let i = 0; i < s.length; i++) {
    // if((s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt()) ||
    // (s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt())) {
    //     filteredString = filteredString + s[i];
    //     rev = s[i] + rev;
    // }

    if (s[i].match(/[a-z0-9]/i)) {
      filteredString = filteredString + s[i];
      rev = s[i] + rev;
    }
  }
  //let rev = filteredString.split("").reverse().join("");
  return filteredString === rev;
};
console.log(isPalindrome("race a car")); //T=O(n), S=O(n)

var isPalindromeOptimized = function(s) {
    let i = 0;
    let j = s.length-1;
    while(i < j) {
        if(s[i].toLowerCase() === s[j].toLowerCase()){
            i++;
            j--;
        }
        else if(!s[j].match(/[a-z0-9]/i)) j--;
        else if(!s[i].match(/[a-z0-9]/i)) i++;
        else { return false; }
    }
    return true;
};
console.log(isPalindromeOptimized("A man, a plan, a canal: Panama")); //T=O(n), S=O(1)
