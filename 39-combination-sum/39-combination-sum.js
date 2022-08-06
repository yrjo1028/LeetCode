let mCondidates = [];
let mTarget = 0;

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    mCondidates = candidates;
    mTarget = target;
    getSumRecursive(result, 0, []);
    
    return result;
};

var getSumRecursive = function(result, index, arr) {
    const sum = arr.reduce((acc, cur) => acc + cur, 0);
    if (sum === mTarget) {
        result.push(arr);
        return;
    }
    
    if (sum > mTarget || index >= mCondidates.length) {
        return;
    }
    
    const num = mCondidates[index];
    getSumRecursive(result, index, [...arr, num]);
    getSumRecursive(result, index + 1, arr);
}