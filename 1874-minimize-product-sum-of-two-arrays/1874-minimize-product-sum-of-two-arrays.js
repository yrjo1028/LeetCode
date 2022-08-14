/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minProductSum = function(nums1, nums2) {
    let result = 0;
    
    const sort1 = nums1.sort((a, b) => a - b);
    const sort2 = nums2.sort((a, b) => b - a);
    
    for (let i = 0; i < nums1.length; i++) {
        result += sort1[i] * sort2[i]
    }
    
    return result;
};