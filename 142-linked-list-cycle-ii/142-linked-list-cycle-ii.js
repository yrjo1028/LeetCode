/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    
    let node = null;
    let cur = null
    if (head) {
        let map = {};
        while (head.next) {
            cur = map[head.val];
            if (cur) {
                node = cur.find(item => item === head);
                map[head.val].push(head);
            } else {
                map[head.val] = [head];
            }
            
            head = head.next;
            if (node) head.next = null;
        }
    }
    
    return node || null;
}; 