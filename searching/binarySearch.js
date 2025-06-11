function binarySearch(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (r >= l){
        let mid = Math.floor((l + r) / 2);
        if (target === nums[mid]) return mid;
        else if (target < nums[mid]) {
            r = mid - 1;
        }
        else{
            l = mid + 1;
        }
    }
    return -1;
};
console.log(binarySearch([-1,0,3,5,9,12],9))