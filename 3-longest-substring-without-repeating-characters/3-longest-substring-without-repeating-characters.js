/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longest = [];
    let arr = [];
    let s_list = s.split('');
    
    s_list.forEach(cur => {
        if(arr.some(a => a === cur)) {
            while(arr.length) {
                if(arr.shift() === cur) break;
            }
        }
        arr.push(cur);
        if(arr.length > longest.length) {
            longest = arr.slice();
        }
    });
    
    return longest.length;
};