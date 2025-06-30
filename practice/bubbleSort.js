function bubbleSort(a){
    let n = a.length;
    for(let i=0; i<n-1; i++){
        for(let j=0; j<n-1-i; i++){
            if(a[j] > a[j+1]){
                let temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
        }
    }
    return a;
}
console.log(bubbleSort([9, 13, 2, 5, 3]));