var isPalindrome = function(head) {
    // My approach 
    
    // let prev = null;
    // let curr = head;
    // while(curr != null){
    //     let temp = curr.next;
    //     curr.next =  prev;
    //     prev = curr;
    //     curr = temp;
    // }
    // return prev === head; //Can't compare

    // LL to Array approach

    // let curr = head;
    // let a = [];
    // while(curr != null){
    //     a.push(curr.val);
    //     curr = curr.next;
    // }
    // let n = a.length;
    // let mid = Math.floor(n/2);
    // for(let i=0; i<mid; i++){
    //     if(a[i] != a[n-1-i]){
    //         return false;
    //     }
    // }
    // return true;

    // Optimized approach

    //finding middle element
    let s = f = head;
    while(f != null && f.next != null){
        s = s.next;
        f = f.next.next;
    }
    console.log(head)
    console.log(s);

    // reverse the second half
    let prev=null;
    let curr=s;
    while(curr != null){
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    console.log(prev);

    //checking for palindrome
    let firstList = head;
    let secondList = prev;
    while (secondList != null){
        if(firstList.val != secondList.val){
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};
//isPalindrome(head);