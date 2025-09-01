
var MinStack = function() {
    this.s = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if(this.s.length == 0 ) {
        this.s.push([val, val]);
    }
    else {
        let minVal = Math.min(val, this.s[this.s.length-1][1]);
        this.s.push([val, minVal]);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this.s.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.s[this.s.length-1][0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.s[this.s.length-1][1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// Example usage:
let minStack = new MinStack();
minStack.push(-2); // stack is [-2]
minStack.push(0);  // stack is [-2, 0] 
minStack.push(-3); // stack is [-2, 0, -3]
console.log(minStack.getMin()); // return -3
minStack.pop(); // stack is [-2, 0]
console.log(minStack.top()); // return 0
console.log(minStack.getMin());  // return -2

//Time complexity of push, pop, top and getMin operations is O(1)
//Space complexity is O(n) where n is number of elements in the stack