let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);

console.log(stack.pop());
console.log(stack);

console.log(stack[stack.length-1]); //top element\peek element

console.log(stack[3]); //Invalid stack operation