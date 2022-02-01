/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    
    let lagest = 0;
    let bf = [];
    
    while (heights.length) {
        
        let cnt = 1;
        let p = heights.shift();
        heights.some(cur => {
            if (p > cur) {
                return true;
            }
            cnt++;
        });
        
        bf.some(cur => {
            if (p > cur) {
                return true;
            }
            cnt++;
        });
        
        let sum = p * cnt;
        if (sum > lagest) lagest = sum;
        
        bf.unshift(p);
        while(p === heights[0]) {
            bf.unshift(heights.shift());
        }
    }
    
    return lagest;
    
};