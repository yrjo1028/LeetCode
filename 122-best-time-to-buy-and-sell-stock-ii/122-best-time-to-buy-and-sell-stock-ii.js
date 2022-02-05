/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxi = 0;
    let bf = prices[0];
    
    for (let p of prices) {
        if (p > bf) maxi += p - bf;
        bf = p;
    }
    
    return maxi;
};