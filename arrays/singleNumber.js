// TC - O(n), SC - O(n)
function singleNumber(nums){
    let obj={};
    for(let i=0; i<nums.length; i++){
        if(obj[nums[i]]){
            obj[nums[i]] = obj[nums[i]] + 1;
        }
        else{
            obj[nums[i]] = 1;
        }
    }
    for (let key in obj){
        if(obj[key] == 1) return +key;
    }
}
console.log(singleNumber([4,1,2,1,2]))
console.log(singleNumber([2,2,1]))

function singleNumberXor(nums){
    let xor = 0;
        for(let i=0; i < nums.length; i++){
            xor = xor ^ nums[i];
        }
        return xor;
}
console.log(singleNumberXor([4,1,2,1,2]))
console.log(singleNumberXor([2,2,1]))