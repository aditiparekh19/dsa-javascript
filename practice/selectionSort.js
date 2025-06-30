function selectionSort(a){
    let n = a.length; //5
    for(let i=0; i<n-1; i++){ //0,1,2,3
        let min = i; //0 //2
        for(let j=i+1; j<n; j++){ //1,2,3,4
            if(a[j] < a[min]) min=j; //5<4 1<4 min=2 3<1 9<1
        }
        if(min!=i){
            let temp = a[i];
            a[i] = a[min];
            a[min] = temp;
        }
    }
    return a;
}   
console.log(selectionSort([4,5,1,3,9]))