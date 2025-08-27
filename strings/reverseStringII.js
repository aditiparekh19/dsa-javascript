var reverseStr = function(s, k) {
    s = s.split(""); // make it an array of chars, srings are immutable
    for(let x=0; x<s.length; x=x+2*k){
        for(let i=0; i<k/2; i++){
            let tmp = s[x+i];
            s[x+i] = s[x+k-1-i];
            s[x+k-1-i] = tmp;
        }
    }
    return s.join("");
};
//reverseStr("abcdefg", 2); //T=O(n), S=O(n) because of split and join