var addTwoNumbers = function(l1, l2) {
    let res = new ListNode();
    let resHead = res;
    let carry = 0;
    while(l1 || l2 || carry) {
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;

        let newNode = new ListNode(digit);
        res.next = newNode;
        res = res.next;

        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return resHead.next;
};
//addTwoNumbers([2,4,3], [5,6,4]); //T=O(max(m,n)), S=O(max(m,n))