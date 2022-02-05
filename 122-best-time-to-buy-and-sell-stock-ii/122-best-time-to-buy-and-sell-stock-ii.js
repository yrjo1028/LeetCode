/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxi = 0;
    
    while (prices.length) {
        let hold = prices.shift();
        let target = hold;
        
        while (prices.length && prices[0] >= target) {
            target = prices.shift();
        }
        
        maxi = maxi + (target - hold);
    }    
    
    return maxi
};