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
 */
var BSTIterator = function(root) {
    this.map = [];
    this.onStack(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    let { val, right } = this.map.pop();
    this.onStack(right);
    return val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.map.length > 0;
};


/**
 * @not return
 */
BSTIterator.prototype.onStack = function(next) {
    while (next) {
        this.map.push(next);
        next = next.left;
    }
}

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */