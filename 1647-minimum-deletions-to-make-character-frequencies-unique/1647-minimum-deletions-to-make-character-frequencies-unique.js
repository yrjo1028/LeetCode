/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    
    let freqList = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        freqList[s.charCodeAt(i) - 97]++;
    }
    
    let ans = 0;
    let set = new Set();
    for (let i = 0; i < 26; i++) {
        let cur = freqList[i];
        if (cur === 0) continue;
        
        while (set.has(cur) && cur > 0) {
            cur--;
        }
        set.add(cur);
        ans = ans + (freqList[i] - cur);
    }
    
    return ans;
    
};