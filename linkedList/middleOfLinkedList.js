var middleNode = function(head) {
    // My approach
    // let curr=head;
    // let count=0;
    // while(curr.next != null){
    //     curr=curr.next;
    //     count++;
    // }
    // curr=head;
    // for(let i=0; i<Math.floor((count+1)/2); i++){
    //     curr=curr.next;
    // }
    // return curr;

    //Convert to Array appraoch
    // let curr = head;
    // let a = [];
    // while(curr.next != null){
    //     a.push(curr.val);
    //     curr = curr.next;
    // }
    // a.push(curr.val);
    // let middle = Math.floor(a.length/2);
    // curr=head;
    // for(let i=0; i<middle; i++){
    //     curr=curr.next;
    // }
    // return curr;

    //slow and fast pointer
    let slow = fast = head;
    while(fast!=null && fast.next!=null){
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};

// middleNode(head);