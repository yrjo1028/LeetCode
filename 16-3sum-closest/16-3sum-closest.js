/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let minDiff = Number.MAX_VALUE;
    let result = 0;
    
    const sortList = nums.sort((a, b) => a - b);
    for (let i = 0; i < sortList.length; ++i) {
        let j = i + 1;
        let k = sortList.length - 1;
        
        while (j < k) {
            const sum = sortList[i] + sortList[j] + sortList[k];
            const diff = target - sum;
            
            if (diff > 0) {
                j++;
            } else if (0 > diff) {
                k--;
            } else {
                return sum;
            }
            
            if (minDiff > Math.abs(diff)) {
                minDiff = Math.abs(diff);
                result = sum;
            }
        }
    }
    
    return result;
};

