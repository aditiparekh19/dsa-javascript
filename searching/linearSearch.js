function binarySearch(nums, target) {
    for(let i=0; i< nums.length; i++){
        if(nums[i] == target) return i;
    }
    return -1;
};
console.log(binarySearch([11,0,31,5,92,12],31))