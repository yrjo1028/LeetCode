/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    const p_arr = pattern.split('');
    const s_arr = s.split(' ');
    
    let is_match = true;
    let map = {};
    let p_map = {};
    
    s_arr.forEach((cur, idx) => {
        let p = p_arr[idx];
        
        if (map[cur] && map[cur] !== p) {
            is_match = false;
            return false;
        }
        
        if (p_map[p] && p_map[p] !== cur) {
            is_match = false;
            return false;
        }
        
        map[cur] = p;
        p_map[p] = cur;
    });
    
    p_arr.forEach((cur, idx) => {
       if(!p_map[cur]) {
           is_match = false;
           return false;
       }
    });
    
    return is_match;
};