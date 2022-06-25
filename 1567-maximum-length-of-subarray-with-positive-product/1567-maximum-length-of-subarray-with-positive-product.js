/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let maxLen = 0;
    let head = -1;
    let tail = -1;
    let mCount = 0;
    let pCount = 0;
    
    while (nums.length > tail) {
        head++;
        if (head === nums.length || nums[head] === 0) {
            while (head > tail) {
                tail++;
                if (0 > nums[tail]) {
                    mCount--;
                }
                if (mCount % 2 === 0) {
                    maxLen = Math.max(maxLen, ((head - 1) - tail));
                }
            }
        } else {
            if (0 > nums[head]) {
                mCount++;
            }
            if (mCount % 2 === 0) {
                maxLen = Math.max(maxLen, (head - tail));
            }
        }
    }
    
    return maxLen;
};