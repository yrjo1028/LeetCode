/**
 * @param {string} s
 * @return {number}
 */
var minDeletions = function(s) {
    
    let ans = 0;
    
    let map = {}
    for (let i=0; i < s.length; i++) {
        let key = s[i];
        if (map[key] == undefined) map[key] = 0;
        map[key]++;
    }
    
    let emptys = [];
    let ex = 0;
    let arr = Object.values(map).sort((a,b) => a-b);
    
    arr.forEach(num => {
        if (ex === num) {
            // 삭제처리
            let empty = (emptys.length) ? emptys.pop() : 0;
            ans = ans + (num - empty);
        }
        else {
            ex++;
            while (num > ex) {
                emptys.push(ex);
                ex++;
            }
        }
        ex = num;
    });
    
    return ans;
    
};