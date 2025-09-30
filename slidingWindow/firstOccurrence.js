var strStr = function(haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
    for(let i=0; i <= m-n; i++){
        let j = 0;
        for (j=0; j < n; j++){
            if(haystack[i+j] !== needle[j]) break;
        }
        if(j===n) return i;
    }
    return -1;
};
console.log(strStr("hello", "ll")); // Output: 2
console.log(strStr("aaaaa", "bba")); // Output: -1
console.log(strStr("sadbutsad", "sad")); // Output: 0
console.log("leetcode", "leeto"); // Output: -1

//Time complexity: O(m*n)
//Space complexity: O(1)