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
    
    if (head === null) return null;
    
    let start = null;
    let arr = [];
    
    while (head.next) {
        start = arr.find(cur => cur === head.next);
        if (start) {
            head.next = null;
        } else {
            arr.push(head);
            head = head.next;
        }
    }
    
    return start || null;
    
};