var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    let len = 0;
    let curr = head;
    while(curr){
        curr = curr.next;
        len++;
    }
    k = k % len;

    let s = head;
    let f = head;
    for(i=0; i<k; i++){
        f = f.next;
    }

    while(f.next) {
        s = s.next;
        f = f.next;
    }

    f.next = head;
    let newHead = s.next;
    s.next = null;
    return newHead;
};
//rotateRight([1,2,3,4,5], 2); //T=O(n), S=O(1)