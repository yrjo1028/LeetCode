/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    
    let ans = [];

    let i = 1;
    while (n >= (i * 2)) {
        ans.push(i);
        ans.push(i * -1);
        i++;
    }
    
    if (n > ans.length) ans.push(0);
    return ans;
    
};