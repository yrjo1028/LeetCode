/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    
    let anser = true;
    let map = {};
    let rmap = {};
    
    let list = s.split(' ');
    if (pattern.length !== list.length) {
        return false;
    }
    
    for (let i = 0; i < pattern.length; i++) {
        const key = pattern[i];
        const val = list[i];
        
        if (map[key] && map[key] !== val) {
            return false;
        }
        
        if (rmap[val] && rmap[val] !== key) {
            return false;
        }
        
        map[key] = val;
        rmap[val] = key
    }
    
    return anser;
};