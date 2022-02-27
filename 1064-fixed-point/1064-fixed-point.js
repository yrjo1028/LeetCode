/**
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function(arr) {
    let ans = -1;
    arr.some((n, i) => {
        if (n === i) {
            ans = i;
            return true;
        }
    })
    
    return ans;
};