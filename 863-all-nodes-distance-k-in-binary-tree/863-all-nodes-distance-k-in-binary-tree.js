/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let hash = {};
    let result = [];
    let bf_val = undefined;
    
    hash = getHash(root, hash);
    do {
        result = searchTree(target, k, result, bf_val);
        bf_val = target.val;
        target = hash[bf_val];
        k--;
    } while (k >= 0 && target);
    
    return result;
};

var searchTree = function(node, k, result, bf_val) {
    const { val, left, right } = node;
    if (k === 0) {
        result.push(val);
        return result;
    }
    if (left && left.val !== bf_val) {
        result = searchTree(left, k - 1, result, bf_val);
    }
    if (right && right.val !== bf_val) {
        result = searchTree(right, k - 1, result, bf_val);
    }
    return result;
}

var getHash = function(node, hash) {
    const { val, left, right } = node;
    if (left) {
        hash[left.val] = node;
        getHash(left, hash);
    }
    if (right) {
        hash[right.val] = node;
        getHash(right, hash);
    }
    return hash;
}