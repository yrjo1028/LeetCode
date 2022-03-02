/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    let p = 0;
    for (let i=0; i < s.length; i++) {
        let idx = t.indexOf(s[i], p);
        if (idx >= 0) {
            p = idx+1;
        } else {
            return false;
        }
    }
    
    return true;
    
};