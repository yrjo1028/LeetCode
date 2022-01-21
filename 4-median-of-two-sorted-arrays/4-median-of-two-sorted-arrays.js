/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let arr = nums1.concat(nums2).sort(function(a, b) { return a - b});
    let idx = Math.ceil(arr.length / 2);
    
    return (arr[idx - 1] + arr[arr.length - idx]) /2
};