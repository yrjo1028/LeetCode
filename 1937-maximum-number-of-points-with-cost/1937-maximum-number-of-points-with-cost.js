/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let ans = 0;
    let m = points.length;
    let n = points[0].length;
    
    let dp = [];
    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++){
            if (!dp[j]) dp[j] = 0;
            dp[j] += points[i][j];
        }
        
        for(let j=1; j<n; j++){
            dp[j] = Math.max(dp[j], dp[j-1] - 1);
        }
        
        for(let j=n-2; j>=0; j--){
            dp[j] = Math.max(dp[j], dp[j+1] - 1);
        }
    }
    
    for(let i=0; i<n; i++){
        ans = Math.max(ans, dp[i]);
    }
    
    return ans;
};