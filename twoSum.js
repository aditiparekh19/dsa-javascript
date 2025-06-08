function twoSum(nums, target){
    for(let i=0; i<nums.length; i++) {
        return target === nums[i] + nums[i+1]? [i,i+1] : [];
    }
}
console.log(twoSum([2,7,11,15],9));

//Object

function twoSumObject(nums, target){
    let obj = {};
    for(let i=0; i<nums.length; i++) {
        if (!obj[target-nums[i]])
        {
            obj[nums[i]] = i
        } 
        else{
            return [obj[target-nums[i]], i];
        }
    }
    return obj;
}
console.log(twoSumObject([2,7,11,15],26));

// {
//     "2": 0 // 26-2=24,
//     "7": 1 // 26-7=19,
//     "11": 2 // 26-11=15,
//     "15":  // 26-15=11 => exists in the object => return [2,3]
// }

