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
 * @return {TreeNode[]}
 */

let map = {};
let ans = [];

var findDuplicateSubtrees = function(root) {
    map = {};
    ans = [];
    searchNode(root);
    return ans;
};

var searchNode = function (root) {
    
    if (!root) return "n";
    
    const { val, left, right } = root;
    
    let res1 = searchNode(left);
    let res2 = searchNode(right);
    
    let key = res1 + "." + res2 + "." + val;
    if (!map[key]) {
        map[key] = 1;
    }
    else if (map[key] === 1) {
        map[key] = 2;
        ans.push(root);
    }
    
    return key;
    
}