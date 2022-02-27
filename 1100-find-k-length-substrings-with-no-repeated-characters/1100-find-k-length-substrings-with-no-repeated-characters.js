/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    
    let map = [];
    let ans = 0;
    
    let arr = s.split('');
    arr.forEach((cur, idx) => {
        while(map.includes(cur)) {
            map.shift();
        }
            
        map.push(cur);
        if (map.length > k) map.shift();
        if (map.length === k) ans ++;
    });
    
    return ans;
};