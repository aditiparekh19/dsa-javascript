var deleteDuplicates = function(head) {
    let senital = new ListNode();
    senital.next = head;
    while(head !=null && head.next != null){
        if(head.val == head.next.val){
            head.next = head.next.next;
        }
        else{
            head = head.next;
        }
    }
    return senital.next;
};
//deleteDuplicates([1,1,2,3,3]);