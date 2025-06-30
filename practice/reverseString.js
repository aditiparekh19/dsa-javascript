function reverseString(a){
    let i=0;
    let j=a.length-1;
    while(i<j){
        temp=a[i];
        a[i]=a[j];
        a[j]=temp;
        i++;
        j--;
    }
    return a;
}
console.log(reverseString(["a", "d", "i", "t", "i"]))

function reverseStringOptimized(a){
    let len = a.length;
    let halfLen = Math.floor(len/2);
    for(let i=0; i<halfLen; i++){
        let temp = a[i];
        a[i] = a[len-i-1];
        a[len-i-1] = temp;
    }
    return a;
}
console.log(reverseStringOptimized(["a", "d", "i", "t", "i"]))