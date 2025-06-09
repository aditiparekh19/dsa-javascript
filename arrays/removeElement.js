function removeDuplicatesFindLength(nums, val){
    if (nums.length<=0) return 0;
    let i=0;
    for (let j=0; j < nums.length; j++) {
        if (nums[j] !== val){
            nums[i]=nums[j];
            i++;
        }
    }
    return i;
}
console.log(removeDuplicatesFindLength([0,1,2,2,3,0,4,2], 2));
console.log(removeDuplicatesFindLength([3,2,2,3], 2));