/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxi = 0;
    let bf = prices[0];
    
    prices.forEach(cur => {
        if (cur > bf) {
            maxi += cur - bf;   
        }
        bf = cur;
    })
    
    return maxi;
};