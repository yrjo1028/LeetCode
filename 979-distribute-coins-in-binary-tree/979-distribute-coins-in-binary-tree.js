/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function(root, cnt) {
    
    const [coin, zero, ans] = searchTree(root);
    return ans;
    
};

var searchTree = function (root) {
    
    let zero_cnt = 0;
    let coin_cnt = 0;
    let sum = 0;
    
    if (root) {
        const { val, left, right } = root;
        
        let [l_coin, l_zero, l_sum] = searchTree(left);
        let [r_coin, r_zero, r_sum] = searchTree(right);
        
        coin_cnt = val + l_coin + r_coin;
        zero_cnt = l_zero + r_zero + 1;
        sum = l_sum + r_sum;
        
        if (coin_cnt > zero_cnt) {
            coin_cnt = coin_cnt - zero_cnt;
            zero_cnt = 0;
            sum = sum + coin_cnt;
            
            console.log(coin_cnt);
        }
        else {
            zero_cnt = zero_cnt - coin_cnt;
            coin_cnt = 0;
            sum = sum + zero_cnt;
        }
    }
    
    return [coin_cnt, zero_cnt, sum];
    
}