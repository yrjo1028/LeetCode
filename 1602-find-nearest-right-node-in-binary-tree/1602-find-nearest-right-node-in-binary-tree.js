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
 * @param {TreeNode} u
 * @return {TreeNode}
 */
var findNearestRightNode = function(root, u) {
    
    // 초기 값 검증
    if (root.val === null || root === u) {
        return null;
    }
    
    
    let map = [[root]];
    let depth = 0;
    let is_find = false;
    
    while (!is_find) {
        let arr = map[depth];
        depth++;
        map[depth] = [];
        
        for(let node of arr) {
            if (node.left) {
                if (is_find) return node.left;
                map[depth].push(node.left);
                if (node.left === u) {
                    is_find = true;
                }
            }
            if (node.right) {
                if (is_find) return node.right;
                map[depth].push(node.right);
                if (node.right === u) {
                    is_find = true;
                }
            }
        }
    }
    
    return null;
};