var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let l = 1;
        r = n;
        while (l < r){
            let m = l + Math.floor((r-l)/2);

            if(!isBadVersion(m)){
                l = m + 1;
            }
            else{
                r = m;
            }
        }
        return r;
    };
};
//Example usage:
let isBadVersion = function(version) {
    return version >= 4;
}
let firstBadVersion = solution(isBadVersion);
console.log(firstBadVersion(5)); // 4
console.log(firstBadVersion(1)); // 1
console.log(firstBadVersion(10)); // 4  
//Time complexity: O(log n)
//Space complexity: O(1)