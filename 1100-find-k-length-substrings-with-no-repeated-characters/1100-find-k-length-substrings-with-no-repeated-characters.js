/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    
    let p = k;
    let ans = 0;
    
    while (s.length >= p) {
        
        let map = {};
        
        let sub = s.substring(p-k, p);
        let is_dup = sub.split('').some(cur => {
            if (map[cur]) return true;
            map[cur] = 1;
        });
        
        if (is_dup === false) ans++;
        p++;
    }
    
    return ans;
};