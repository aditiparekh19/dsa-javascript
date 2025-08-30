let queue = [];

queue.push(1); //enqueue
queue.push(2);
queue.push(3);
console.log(queue);

console.log(queue.shift()); //dequeue
console.log(queue);

console.log(queue[0]); //front element\peek element

console.log(queue[1]); //Invalid queue operation
console.log(queue.pop()); //Invalid queue operation