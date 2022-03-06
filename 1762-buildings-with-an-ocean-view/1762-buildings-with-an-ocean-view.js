/**
 * @param {number[]} heights
 * @return {number[]}
 */
var findBuildings = function(heights) {
    
    let ans = [];
    
    let n = heights.length;
    let taller = 0;
    
    for (let i = 1; i <= n; i++) {
        if (heights[n - i] > taller) {
            taller = heights[n - i];
            ans.push(n - i);
        }
    }
    
    return ans.reverse();
    
};