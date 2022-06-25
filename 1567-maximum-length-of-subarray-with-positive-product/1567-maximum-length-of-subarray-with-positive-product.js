/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let maxLen = 0;
    let head = -1;
    let tail = -1;
    let count = 0;
    
    while (nums.length > tail) {
        head++;
        if (head === nums.length || nums[head] === 0) {
            while (head > tail) {
                tail++;
                if (0 > nums[tail]) {
                    count--;
                }
                if (count % 2 === 0) {
                    maxLen = Math.max(maxLen, ((head - 1) - tail));
                }
            }
        } else {
            if (0 > nums[head]) {
                count++;
            }
            if (count % 2 === 0) {
                maxLen = Math.max(maxLen, (head - tail));
            }
        }
    }
    
    return maxLen;
};