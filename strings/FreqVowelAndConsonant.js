var maxFreqSum = function(s) {
    let obj = {};
    let c1 = 0;
    let c2 = 0;
    let vowelsArray = ['a', 'e', 'i', 'o', 'u'];
    for(let i=0; i<s.length; i++){
        if(obj[s[i]]){
            obj[s[i]] = obj[s[i]]+1
        }
        else{
            obj[s[i]] = 1;
        }
    }
    console.log(obj);

    for(let key in obj){
        if(vowelsArray.includes(key)){
            if(obj[key] > c1) {
                c1 = obj[key]
            }
        } else{
            if(obj[key] > c2) {
                c2 = obj[key]
            }
        }
    }
    return c1+c2;
};
//maxFreqSum("leetcode"); //T=O(n), S=O(n)