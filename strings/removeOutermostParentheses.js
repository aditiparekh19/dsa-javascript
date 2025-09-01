var removeOuterParentheses = function(s) {
    let level = 0;
    let res = "";
    for(let ch of s){
        if (ch === '(') {
            level++;
            res += level > 1 ? ch : "";
        }
        else {
            res += level > 1 ? ch : "";
             level--;
        }
    }
    return res;
};
// Example usage:
console.log(removeOuterParentheses("(()())(())")); // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParentheses("()()")); // ""

//Time complexity is O(n) where n is length of string
//Space complexity is O(n)/O(1) ideally for mutable string for result string