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
    return (sum > lagest) ? sum : lagest ;
    
};

var checkSum = function (root) {
    
    let sum = null;
    let lagest = null;
    
    if (root) {
        let { sum: l_sum, lagest: l_lagest } = checkSum(root.left);
        let { sum: r_sum, lagest: r_lagest } = checkSum(root.right);
        
        sum = root.val;
        let left_sum = (l_sum) ? l_sum + sum : sum;
        let right_sum = (r_sum) ? r_sum + sum : sum;
        if (left_sum > right_sum) {
            if (left_sum > sum) sum += l_sum;
        } else {
            if (right_sum > sum) sum += r_sum;
        }
        
        lagest = root.val + l_sum + r_sum;
        if (sum > lagest) lagest = sum;
        if (l_lagest !== null && l_lagest > lagest) lagest = l_lagest;
        if (r_lagest !== null && r_lagest > lagest) lagest = r_lagest;
                
    }
    
    return { sum, lagest };
}