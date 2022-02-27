/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function(s, k) {
    
    let arr = [];
    let ans = 0;
    
    for (let i = 0; i < s.length; i++) {
        while(arr.includes(s[i])) {
            arr.shift();
        }
        
        arr.push(s[i]);
        if (arr.length > k) arr.shift();
        if (arr.length === k) ans ++;
    }
    
    return ans;
};