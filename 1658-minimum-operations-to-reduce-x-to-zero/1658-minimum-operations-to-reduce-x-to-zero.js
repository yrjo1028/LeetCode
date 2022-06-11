/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let map = { 0: 0 };
    let total = nums.reduce((acc, num, index) => {
        map[index+1] = acc + num;
        return map[index+1];
    }, 0);
    
    let target = total - x;
    let pointer = 0;
    let max = -1;
    nums.forEach((num, index) => {
        while (target > map[pointer] - map[index]) {
            pointer++;
        }
        if (map[pointer] - map[index] === target) {
            max = Math.max(pointer - index, max);
        }
    });
    
    return (max === -1) ? -1 : (nums.length - max);
};