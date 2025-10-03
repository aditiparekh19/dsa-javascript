var lengthOfLongestSubstring = function(a) {
    let i=0; let j=0; let maxWindowSize=0;
    let map = {};
    for(j=0; j<a.length; j++){
        //is my element there in the map
        if(map[a[j]] !== undefined && map[a[j]] >= i){
            i = map[a[j]] + 1;
        }
        map[a[j]] = j;
        let currWindowSize = j-i+1;
        maxWindowSize = Math.max(maxWindowSize, currWindowSize);
    }
    return maxWindowSize;
};
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1      
console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3
//Time complexity: O(n)
//Space complexity: O(min(m,n)) where m is the size of charset and n is the size of string