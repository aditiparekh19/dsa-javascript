var twoSum = function(a, target) {
    let i = 0;
    let j = a.length-1;
    while(i<j){
        if(a[i] + a[j] > target) j--;
        else if(a[i] + a[j] < target) i++;
        else {
            return [i+1, j+1];
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([-1,0], -1));
//Time complexity: O(n)
//Space complexity: O(1)