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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
    const { val, left, right } = root;
    
    let ans = 0;
    if (val >= low && high >= val) {
        ans = val;
    }
    
    if (left && val > low) {
        ans = ans + rangeSumBST(left, low, high);
    }
    
    if (right && high > val) {
        ans = ans + rangeSumBST(right, low, high);
    }
    
    return ans;
    
};