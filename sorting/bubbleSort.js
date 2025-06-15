function bubbleSort(arr){
    let n = arr.length;
    let isSwapped = false;
    for(let i=0; i < n-1; i++){
        for(let j=0; j < n-1-i; j++){
            if(arr[j] > arr[j+1]) 
            {
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
            if(!isSwapped) break;
        }
    }
    return arr;
}
console.log(bubbleSort([5,2,4,1]))
console.log(bubbleSort([9,7,10,15,1,8,2,3]));

// n-1 iterations, n-1-i comparisons
// n=4 
// i=0, j=3
// i=1, j=2
// i=2, j=1