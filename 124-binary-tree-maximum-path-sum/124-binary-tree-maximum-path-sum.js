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

let lagest = null;
var maxPathSum = function(root) {
    lagest = root.val;
    checkSum(root);
    return lagest;
    
};

var checkSum = function (root) {
    if (!root) return -10000;
    
    let l_sum = checkSum(root.left);
    let r_sum = checkSum(root.right);
    let sum = Math.max(
        root.val,
        l_sum + root.val,
        r_sum + root.val,
    );

    lagest = Math.max(
        sum,
        root.val + l_sum + r_sum,
        lagest,
    );
    
    return sum;
}