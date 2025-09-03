var evalRPN = function(tokens) {
    let stack = [];
    for (let ch of tokens){
        if(!isNaN(ch)) {
            stack.push(parseInt(ch));
        }
        else{
            let n1 = stack.pop();
            let n2 = stack.pop();
            if(ch == "+") stack.push(n2+n1);
            if(ch == "-") stack.push(n2-n1);
            if(ch == "*") stack.push(n2*n1);
            if(ch == "/") stack.push(Math.trunc(n2/n1));
            // eval(`${a} + ${char} + ${b}`) can also be used.
            // ["+", "-", "*", "/"].includes(ch) can also be used to check operator.
        }
    }
    return stack[stack.length-1];
};
// Example usage:
console.log(evalRPN(["2","1","+","3","*"])); // 9
console.log(evalRPN(["4","13","5","/","+"])); // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22
// Time complexity is O(n) where n is number of tokens
// Space complexity is O(n) for stack

var evalRPN = function(tokens) {
    let stack = [];
    const map = {
        "+": (a,b) => (b+a),
        "*": (a,b) => (b*a),
        "-": (a,b) => (b-a),
        "/": (a,b) => Math.trunc(b/a),
    };
        for(let ch of tokens){
            if(map[ch]) {
                let a = stack.pop();
                let b = stack.pop();
                let ans = map[ch](+a,+b);
                stack.push(ans);
            } else {
                stack.push(ch) 
            }
        }
    return Number(stack.pop());
};
// Example usage:
console.log(evalRPN(["2","1","+","3","*"])); // 9
console.log(evalRPN(["4","13","5","/","+"])); // 6
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"])); // 22
// Time complexity is O(n) where n is number of tokens
// Space complexity is O(n) for stack 