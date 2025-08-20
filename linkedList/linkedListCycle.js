var hasCycle = function(head) {
    // hashMap | Set

    // let curr = head;
    // let set = new Set();
    // while(curr != null){
    //     if(set.has(curr)){
    //         return true;
    //     }
    //     else{
    //         set.add(curr);
    //         curr = curr.next;
    //     }
    // }
    // return false;

    // Flyod's Algo

    let s = f = head;
    while(f != null && f.next != null){
        s = s.next;
        f = f.next.next;
        if (s == f) return true;
    }
    return false;
};
//hasCycle(head);