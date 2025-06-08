function maxConsecutiveOnes(nums){
    let count = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            count++;
        }
        else{
            count = 0;
        }
    }
    return count;
}
console.log(maxConsecutiveOnes([1,1,0,1,1,1]));