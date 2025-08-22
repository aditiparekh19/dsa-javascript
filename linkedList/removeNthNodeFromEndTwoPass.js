var removeNthFromEnd = function (head, n) {
  let sentinal = new ListNode();
  sentinal.next = head;
  let length = 0;
  while (head != null) {
    head = head.next;
    length++;
  }
  let prevPos = length - n;
  let prev = sentinal;
  for (let i = 0; i < prevPos; i++) {
    prev = prev.next;
  }
  prev.next = prev.next.next;
  return sentinal.next;
};
//removeNthFromEnd([1,2,3,4,5], 2);  //T=O(n), S=O(1)
