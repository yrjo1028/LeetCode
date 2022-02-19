/**
 * @param {number[][]} mat
 * @return {number}
 */

let m = 0;
let n = 0;

var minFlips = function(mat) {
    
    n = mat.length;
    m = mat[0].length;
    
    let ans = flipOrNotFlip(mat, 0, 0);
    return (100 > ans) ? ans : -1;
};

var flipOrNotFlip = function (mat, y, x) {
    if (x === m) {
        x = 0;
        y++;
    }
    if (y === n) {
        return chk_zero(mat) ? 0 : 100;
    }
    
    let target = JSON.parse(JSON.stringify(mat));
    let not_flip = flipOrNotFlip(target, y, x+1);
    let on_flip = flipOrNotFlip(filp(target, y, x), y, x+1) + 1;
    
    return Math.min(not_flip, on_flip);
}

var filp = function (mat, y, x) {
    mat[y][x] ^= 1; // 현재위치 비트 반전
    // 동서남북으로 비트반전, 배열의 범위를 넘지 않는지 체크
    if (y - 1 >= 0) mat[y - 1][x] ^= 1;
    if (y + 1 <  n) mat[y + 1][x] ^= 1;
    if (x - 1 >= 0) mat[y][x - 1] ^= 1;
    if (x + 1 <  m) mat[y][x + 1] ^= 1;
    return mat;
}

var chk_zero = function (mat) {
    let chk = !mat.some(arr => {
        return arr.some(num => num === 1)
    });
    return chk;
}