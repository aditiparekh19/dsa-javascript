var maxFreqSum = function(s) {
    let obj = {};
    let c1 = 0;
    let c2 = 0;
    let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<s.length; i++){ //O(n)
        obj[s[i]] = !obj[s[i]] ? 1 : ++obj[s[i]];
    }

    for(let key in obj){ //O(1)
        if(vowelsArray.includes(key)){ //O(1)
            c1 = Math.max(obj[key], c1);
        } else{
            c2 = Math.max(obj[key], c2);
        }
    }
    return c1+c2;
};
//maxFreqSum("leetcode"); //T=O(n), S=O(1)