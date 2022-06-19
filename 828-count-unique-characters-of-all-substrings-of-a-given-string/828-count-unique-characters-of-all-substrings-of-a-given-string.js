/**
 * @param {string} s
 * @return {number}
 */
var uniqueLetterString = function(s) {
    const lastPositions = new Array(26).fill(0);
    const contributions = new Array(26).fill(0);
    
    let answer = 0;
    let cur = 0;
    
    for (let i = 0; i < s.length; i++) {
        const charIndex = i + 1;
        const code = s[i].charCodeAt() - 65;
        const add = charIndex - lastPositions[code];
        
        cur = cur + add - contributions[code];
        answer += cur;
        
        contributions[code] = add;
        lastPositions[code] = charIndex;
    }
    
    return answer;
};

// var uniqueLetterString = function(s) {
//     let answer = 0;
//     for (let i = 0 ; i < s.length; i++) {
//         let count = 0;
//         let map = {};
//         for (let j = i; j < s.length; j++) {
//             char = s[j];
//             if (map[char] === undefined) {
//                 map[char] = 0;
//                 count++;
//             } else if (map[char] === 0) {
//                 map[char]++;
//                 count--;
//             }
//             answer += count;
//         }
//     }
//     return answer;
// };