// trial
function missingNumber_1(nums){
    let obj = {};
    let res = "";
    for(let i=0; i<=nums.length; i++){
        obj[i] = i
    }
    for(let i=0; i< nums.length; i++){
        if(obj[nums[i]] != undefined){
            obj[nums[i]] = 1;
        }
    }
    for(let key in obj){
        if(obj[key] !== 1){
            res = obj[key]
        }
    }
    return res;
}
console.log(missingNumber_1([9,6,4,2,3,5,7,0,1]));

//O(n logn)
function missingNumber_2(nums){
    nums.sort((a, b) => a - b);
    if (nums[0] !== 0) return 0;
    for (let i = 1; i < nums.length; i++) 
    {
        if (nums[i] !== nums[i - 1] + 1) {
            return nums[i - 1] + 1;
        }
    }
  
    return nums.length;
}
console.log(missingNumber_2([9,6,4,2,3,5,7,0,1]));

//O(n)

function missingNumber_2(nums){
    let n = nums.length;
    let totalSum = n*(n+1)/2;
    let arraySum = nums.reduce((acc, curr) =>{
        acc = acc+ curr;
        return acc;
    }, 0)
    return totalSum-arraySum;
}
console.log(missingNumber_2([9,6,4,2,3,5,7,0,1]));