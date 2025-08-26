var balancedStringSplit = function(s) {
    let r = 0;
    let l = 0;
    let balancedCount = 0;
    for(let i=0; i<s.length; i++){
        if(s[i] == 'R') r++;
        else{ l++ };
        if(l == r) {
            balancedCount++;
            r = 0;
            l = 0;
        }
    }
    return balancedCount;
};
//balancedStringSplit("RLRRLLRLRL"); //T=O(n), S=O(1)