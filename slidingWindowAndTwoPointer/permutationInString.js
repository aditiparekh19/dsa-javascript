var checkInclusion = function(s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    window_length = s1.length;

    for(let i=0; i<window_length; i++){
        ++hashS[s1.charCodeAt(i)-97];
        ++hashW[s2.charCodeAt(i)-97];
    }
    
    let i=0; let j=window_length-1;
    while(j < s2.length){
        if(ishashSame(hashS, hashW)){
            return true;
        }
        else{
            --hashW[s2.charCodeAt(i)-97];
            i++; j++;
            ++hashW[s2.charCodeAt(j)-97];
        }
    }
    return false;
};

var ishashSame = function(hashS, hashW){
    for(let i=0; i<26; i++){
        if(hashS[i] !== hashW[i]) return false;
    }
    return true;
}
console.log(checkInclusion("ab", "eidbaooo")); // Output: true
console.log(checkInclusion("ab", "eidboaoo")); // Output: false
console.log(checkInclusion("adc", "dcda")); // Output: true
console.log(checkInclusion("hello", "olleh")); // Output: true
//Time complexity: O(n)
//Space complexity: O(1) as there are only 26 characters in the input string