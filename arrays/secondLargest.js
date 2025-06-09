// function secondLargestOptimised(nums){
        // if (arr.length < 2) return null;
        // let largest = Number.NEGATIVE_INFINITY;
        // let secondLargest = Number.NEGATIVE_INFINITY;
        // for (let i = 1; i < arr.length; i++){
        //     if (arr[i] > largest) {
        //         secondLargest = largest;
        //         largest = arr[i];
        //     }
        //     else if (arr[i] != largest && arr[i] > secondLargest) {
        //         secondLargest = arr[i];
        //     }
        // }
        // return secondLargest;
// }
// console.log(secondLargestOptimised([12, 35, 1, 10, 34,1]));

function secondLargest(nums){ 
    let arraySet = Array.from(new Set(nums)); //O(n)
    arraySet.sort((a,b) => b-a); //O(nlogn)
    return arraySet[1];
}
console.log(secondLargest([12, 100, 900, 87, 35, 1, 10, 34, 1, 64]))