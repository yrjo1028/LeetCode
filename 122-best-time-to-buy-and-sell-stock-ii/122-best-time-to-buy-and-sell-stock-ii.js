/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let maxi = 0;
    
    if (prices.length) {
        let hold = prices.shift();
        let target = hold;
        
        prices.forEach(p => {
            if (p >= target) {
                target = p;
            } else {
                maxi += target - hold;
                hold = p;
                target = p;
            }
        });
        
        maxi += target - hold
    }
    
    return maxi;
};