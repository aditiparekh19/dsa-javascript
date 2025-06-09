function subsets(nums)
{
    let result = [];
    let temp = [];

    function recursive(nums, index){
        if(index === nums.length) return result.push([...temp]); // nums.length - 3 -> res :- 
        temp.push(nums[index]);  // tmp :- [1] -> [1,2] -> [1, 2, 3]
        console.log(temp);
        recursive(nums, index+1); // r([1,2,3], 1) -> r([1,2,3], 2) -> r([1,2,3], 3)-> ❎
        console.log("Hi");
        temp.pop();
        recursive(nums, index+1);
    }
    recursive(nums, 0);
    return result;
}

console.log(subsets([1,2,3]));