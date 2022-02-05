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
var maxPathSum = function(root) {
    
    let { sum, lagest } = checkSum(root);
    return lagest;
    
};

var checkSum = function (root) {
    
    let sum = -1000;
    let lagest = -1000;
    
    if (root) {
        let { sum: l_sum, lagest: l_lagest } = checkSum(root.left);
        let { sum: r_sum, lagest: r_lagest } = checkSum(root.right);
        
        sum = Math.max(
            root.val,
            l_sum + root.val,
            r_sum + root.val,
        );
        
        lagest = Math.max(
            sum,
            root.val + l_sum + r_sum,
            l_lagest,
            r_lagest,
        );
    }
    
    return { sum, lagest };
}