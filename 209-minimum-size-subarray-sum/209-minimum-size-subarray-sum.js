/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = nums.length + 1;
    let p1 = -1;
    let p2 = -1;
    
    let sum = 0;
    while (nums.length > p1 && nums.length > p2) {
        if (nums.length > p1) {
            p1++;
            sum += nums[p1];
        }
        
        while (sum >= target) {
            const length = p1 - p2;
            minLength = Math.min(length, minLength);
            
            p2++;
            sum -= nums[p2];
        }
    }
    
    if (minLength > nums.length) {
        minLength = 0;
    }
    return minLength;
};