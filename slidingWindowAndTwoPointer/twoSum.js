var twoSum = function (a, target) {
  let res = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] + a[j] === target) {
        res.push(i, j);
        break;
      }
    }
  }
  return res;
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
//Time complexity: O(n^2)
//Space complexity: O(1)

var twoSum = function(a, target) {
    let obj = {};
    for(let i=0; i<a.length; i++) {
        obj[a[i]] = i;
    }
    for(let i=0; i<a.length; i++) {
        let pairToFind = target-a[i];
        if(obj[pairToFind] && obj[pairToFind] !== i){
            return [i, obj[pairToFind]]
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
//Time complexity: O(n^2)
//Space complexity: O(1)