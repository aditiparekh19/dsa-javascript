var MyStack = function() {
    this.q1 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q1.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    let n = this.q1.length;
    for(let i=0; i<n-1; i++){
        let frontElement = this.q1.shift();
        this.q1.push(frontElement);
    }
    return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    let n = this.q1.length;
    for(let i=0; i<n-1; i++){
        this.q1.push(this.q1.shift());
    }
    let front = this.q1[0];
    this.q1.push(this.q1.shift());
    return front;
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

// Example usage:
let stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack);
console.log(stack.pop());
console.log(stack);
console.log(stack.top());
console.log(stack.empty());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.empty());

//Pop operation - O(n) time complexity
//Push operation - O(1) time complexity
//Top operation - O(n) time complexity
//Space complexity - O(n)