/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    
    let map = [];
    let ans = 0;
    
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        while(map.includes(cur)) {
            map.shift();
        }
        
        map.push(cur);
        if (map.length > k) map.shift();
        if (map.length === k) ans ++;
    }
    
    return ans;
};