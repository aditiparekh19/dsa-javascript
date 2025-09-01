var removeOuterParentheses = function(s) {
    let stack = [];
    let res = "";
    for(let ch of s){
        if (ch === '(') {
            stack.push(ch);
            res += stack.length > 1 ? ch : "";
        }
        else {
            res += stack.length > 1 ? ch : "";
            stack.pop();
        }
    }
    return res;
};
// Example usage:
console.log(removeOuterParentheses("(()())(())")); // "()()()"
console.log(removeOuterParentheses("(()())(())(()(()))")); // "()()()()(())"
console.log(removeOuterParentheses("()()")); // ""

//Time complexity is O(n) where n is length of string
//Space complexity is O(n) for result string