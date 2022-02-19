/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let ans = 0;
    let col = points[0].length;
    
    const dp = new Array(col).fill(0);
    points.forEach((arr, i) => {
        arr.forEach((num, j) => {
           dp[j] += num; 
        });
        
        for(let j=1; j < col; j++){
            dp[j] = Math.max(dp[j], dp[j-1] - 1);
        }
        
        for(let j=col-2; j>=0; j--){
            dp[j] = Math.max(dp[j], dp[j+1] - 1);
        }
    });
    
    return Math.max(...dp);
};