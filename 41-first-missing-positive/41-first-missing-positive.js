/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    
    let ans = 1;
    
    let arr = new Array(5 * 100000);
    nums.forEach(num => arr[num] = 1);
    
    for (let i=1; i < arr.length; i++) {
        if (arr[i] === undefined) {
            return i;
        }
    }
    
    return 5 * 100000 + 1;
    
};