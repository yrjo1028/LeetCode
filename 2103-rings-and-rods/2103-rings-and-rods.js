/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    
    let ans = 0;
    let is_all = true;
    
    for (let i = 0; i < 10; i++) {
        is_all = true;
        
        if (!rings.includes("R" + i)) {
            is_all = false;
        }
        
        if (!rings.includes("G" + i)) {
            is_all = false;
        }
        
        if (!rings.includes("B" + i)) {
            is_all = false;
        }
        
        if (is_all) ans++;
    }
    return ans
};