// Remove Duplicates from sorted, non-decreasing array. (In place)

// function removeDuplicates(nums){
//     let newObj = nums.reduce((acc, curr) => {
//         if(acc[curr]){
//             acc[curr] += 1;
//         }else{
//             acc[curr] = 1;
//         }
//         return acc;
//     }, {})
    
//     let arr = [];
    
//     for (const key in newObj) {
//         arr.push(key);
//     }
//    return arr;
// }
// console.log(removeDuplicates([1,1,1,2,2,3,4,4,5]));


// function removeDuplicates(nums){
//     for (let i = 0; i < nums.length -1; i++) {
//         if (nums[i] === nums[i+1]){
//             nums.splice(i+1, 1);
//             i--;
//         }
//     }
//     console.log(nums);
// }
// console.log(removeDuplicates([1,1,1,1,2,3,3,4,4]));

function removeDuplicatesFindLength(nums){
    if (nums.length<=0) return 0;
    let i=0;
    for (let j=1; j < nums.length; j++) {
        if (nums[i] !== nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
}
console.log(removeDuplicatesFindLength([1,1,1,1,2,3,3,4,4,5]));