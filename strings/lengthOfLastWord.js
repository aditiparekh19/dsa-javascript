var lengthOfLastWord = function(s) {
    // let array = s.trim().split(" ");
    // let word = array[array.length-1];
    // return word.length;

    let count = 0;
    for(i=s.length-1; i>=0; i--){
        if(s[i]!= ' ') {
            count++;
        }
        else if(count>0 && s[i] === ' ') break;
    }
    return count;
};
lengthOfLastWord("   fly me   to   the moon  "); //T=O(n), S=O(1)