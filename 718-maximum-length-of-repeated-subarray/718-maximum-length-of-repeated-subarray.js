/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
    let maxLength = 0;
    
    const map = Array.from(Array(nums1.length), () => new Array(nums2.length).fill(0));
    
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                let length = 1
                if (i > 0 && j > 0) {
                    length += map[i-1][j-1];
                }
                map[i][j] = length; 
                maxLength = Math.max(length, maxLength);
            }
        }
    }
    
    console.log(map);
    return maxLength;
};