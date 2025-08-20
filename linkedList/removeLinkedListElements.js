var removeElements = function(head, val) {
    let sentinal = new ListNode();
    sentinal.next = head;
    let prev = sentinal;
    while(prev.next != null){
        if(prev.next.val == val){
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next;
        }
    }
    return sentinal.next;
};
// removeElements(head, val);