function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
};

MyLinkedList.prototype.get = function (index) {
  if(index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i=0; i<index; i++) curr=curr.next;
  return curr.val;
};

MyLinkedList.prototype.addAtHead = function(val) {
   let newNode = new Node(val);
   newNode.next = this.head;
   this.head = newNode;
   this.size++;
};

MyLinkedList.prototype.addAtTail = function(val) {
    let newNode = new Node(val);
    if (!this.head) this.head = newNode;
    else{
        let curr = this.head;
        while(curr.next != null){
            curr = curr.next;
        }
        curr.next=newNode;
    }
    this.size++;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index < 0 || index >= this.size) return;
    if(index === 0){
        return this.addAtHead(val);
    }
    else if(index === this.size){
        return this.addAtTail(val);
    }
    let curr = this.head;
    let newNode = new Node(val);
    for(let i=0; i<index-1; i++){
        curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
    this.size++;
};

MyLinkedList.prototype.deleteAtIndex = function (index) {
  if(index < 0 || index >= this.size) return;
  if (index === 0) this.head = this.head.next;
  else{
    let curr = this.head;
    for(let i=0; i<index-1; i++){
        curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

MyLinkedList.prototype.getArray = function () {
  let curr = this.head;
  let a = [];
  while(curr.next != null){
    a.push(curr);
    curr=curr.next;
  } 
  return a;
};


var obj = new MyLinkedList();
obj.addAtHead(3);
obj.addAtHead(2);
obj.addAtHead(1);
obj.addAtTail(6);
obj.addAtIndex(1,7);
obj.deleteAtIndex(2);
console.log(obj.get(3));
console.log(obj.getArray());