/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    if (2 > prices.length) return 0;
    
    let maxi = 0;
    let hold = 0;
    let target = 0;
    
    while (prices.length) {
        hold = prices.shift();
        target = hold;
        
        while (prices.length && prices[0] >= target) {
            target = prices.shift();
        }
        
        maxi = maxi + (target - hold);
    }    
    
    return maxi
};