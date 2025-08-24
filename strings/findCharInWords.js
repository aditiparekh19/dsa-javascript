var findWordsContaining = function(words, x) {
    let res = [];
    let index = 0;
    for (let word of words) { //leet //code
        for (let i = 0; i < word.length; i++) {
            if (word[i] === x) { //l==e //e==e | //c==e //o==e //d==e //e==e
                res.push(index); //0 //1
                break;
            }
        }
        index++; //1 //2
    }
    return res; //[0,1]
};
findWordsContaining(["leet", "code", "practice"], "e"); //T=O(n*m), S=O(n)