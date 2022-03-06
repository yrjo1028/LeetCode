/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    let ans = 1;
    
    let arr = new Array(5 * 100000).fill(0);
    nums.forEach(num => arr[num] = 1);
    
    for (let i=1; i < arr.length; i++) {
        if (arr[i] === 0) {
            return i;
        }
    }
    return 5 * 100000 + 1;
    
};