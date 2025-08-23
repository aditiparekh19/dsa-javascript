var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let l = head;
  let r = head.next;

  l.next = swapPairs(r.next);
  r.next = l;

  return r;
};
//swapPairs([1,2,3,4]); //T=O(n), S=O(n)