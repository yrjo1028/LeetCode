/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxi = 0;
    let ex = prices[0];
    
    for (let p of prices) {
        if (p > ex) maxi += p - ex;
        ex = p;
    }
    
    return maxi;
};