/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const result = [];
    const max = Math.max(...candies);
    
    console.log(max);
    for (let i = 0; i < candies.length; ++i) {
        const sum = candies[i] + extraCandies;
        result[i] = (sum >= max) ? true : false;
    }
    
    return result;
};