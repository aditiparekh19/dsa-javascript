var isSubsequence = function(s, t) {
    let i=0;j=0;
    while(i<=t.length){
        if(t[i] === s[j]){
            i++; j++;
        } 
        else if(t[i] != s[j]) i++;
    }
    return j < s.length ? false : true;
};
console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
//Time complexity: O(n)
//Space complexity: O(1)