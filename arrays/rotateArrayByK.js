// Rotate Array by K steps
// [1,2,3,4,5,6,7], K=3 --> [5,6,7,1,2,3,4]
// [1,2,3,4,5,6,7] => [7,1,2,3,4,5,6] => [6,7,1,2,3,4,5] => [5,6,7,1,2,3,4]

// function rotateArray(nums, k){ //O(n*k)
//     let i=1
//     while(i<=k){ // O(k)
//         let poppedItem = nums.pop();
//         nums.unshift(poppedItem); //O(n)
//         i++;
//     }
//     return nums;
// }
// console.log(rotateArray([-1, -100, 3, 99], 2));


// function rotateArray(nums, k){
//     let size = nums.length; //4
//     if(k > size){ //6>4
//         k = k % size; //k=6%4=2
//     }
//     const rotated = nums.splice(size-k, size) //4-2=2, 4
//     nums.unshift(...rotated);
//     return nums;
// }
// console.log(rotateArray([-1, -100, 3, 99], 6));
// console.log(rotateArray([1,2,3,4,5,6,7], 3));
// O(n)+O(n) = 2O(n) = O(n)

function rotateArray(nums, k){
    let size = nums.length; //4
    if(k > size){ //6>4
        k = k % size; //k=6%4=2
    }
    reverse(nums, 0, size-1);
    reverse(nums, 0, k-1);
    reverse(nums, k, size-1);
    return nums;
}
function reverse(nums, left, right){
    let temp = 0;
    while(left < right){
        temp = nums[left];
        nums[left++] = nums[right];
        nums[right--] = temp;
    }
}
console.log(rotateArray([-1, -100, 3, 99], 6));
console.log(rotateArray([1,2,3,4,5,6,7], 3));
//O(n)