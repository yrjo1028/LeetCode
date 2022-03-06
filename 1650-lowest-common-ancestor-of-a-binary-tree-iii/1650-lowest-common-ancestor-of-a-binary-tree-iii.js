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
    
    const arr = [];
    while(p) {
        if (p === q) return p;
        arr.push(p);
        p = p.parent;
    }
    
    while (q) {
        for (let node of arr) {
            if (node.val === q.val) return node;
        }
        
        q = q.parent;
    }
    
    
};