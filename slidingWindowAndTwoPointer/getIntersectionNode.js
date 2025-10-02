var getIntersectionNode = function (headA, headB) {
  let n = 0;
  let pA = headA;
  while (pA) {
    n++;
    pA = pA.next;
  }

  let m = 0;
  let pB = headB;
  while (pB) {
    m++;
    pB = pB.next;
  }

  let diff = Math.abs(n - m);
  if (n > m) {
    let tmp = headA;
    headA = headB;
    headB = tmp;
  }

  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  pA = headA;
  pB = headB;
  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};
console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5])); // Output: Intersected at '8'
console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4])); // Output: Intersected at '2'
console.log(getIntersectionNode([2, 6, 4], [1, 5])); // Output: No intersection
//Time complexity: O(m+n)
//Space complexity: O(1)

var getIntersectionNode = function(headA, headB) {
    let pA = headA;
    let pB = headB;
    
    while(pA != pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};
console.log(getIntersectionNode([4, 1, 8, 4, 5], [5, 0, 1, 8, 4, 5])); // Output: Intersected at '8'
console.log(getIntersectionNode([1, 9, 1, 2, 4], [3, 2, 4])); // Output: Intersected at '2'
console.log(getIntersectionNode([2, 6, 4], [1, 5])); // Output: No intersection
//Time complexity: O(m+n)
//Space complexity: O(1)