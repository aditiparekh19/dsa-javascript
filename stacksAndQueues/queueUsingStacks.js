var MyQueue = function() {
    this.s1 = [];
    this.s2 = [];
};

MyQueue.prototype.push = function(x) {
    this.s1.push(x);
};

MyQueue.prototype.pop = function() {
    let n = this.s1.length;
    if(this.s2.length == 0){
        while(this.s1.length){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2.pop();
};

MyQueue.prototype.peek = function() {
    let n = this.s1.length;
    if(this.s2.length == 0){
        while(this.s1.length){
            this.s2.push(this.s1.pop());
        }
    }
    return this.s2[this.s2.length-1];
};

MyQueue.prototype.empty = function() {
    return this.s1.length === 0 && this.s2.length === 0;
};

// Example usage:
let queue = new MyQueue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue); 
console.log(queue.pop());
console.log(queue); 
console.log(queue.peek());
console.log(queue.empty());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.empty());

//Time complexity of push, pop, peek and empty operations is O(1) on average.