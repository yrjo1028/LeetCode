/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    
    let a = p;
    let b = q;
    
    while (a != b) {
        a = (a) ? a.parent : q;
        b = (b) ? b.parent : p;
    }
    
    return a;
    
};