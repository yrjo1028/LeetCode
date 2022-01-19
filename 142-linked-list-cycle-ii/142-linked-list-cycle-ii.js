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
    if (head === null) {
        return null;
    }
    
    let node = null;
    let cur = null;
    let arr = {};
    while (head.next) {
        cur = arr[head.val];
        if (cur) {
            node = cur.find(item => item === head.next);
            if (node) {
                node = head;
                head.next = null;            
            } else {
                arr[head.val].push(head.next);       
                head = head.next;
            }
        }
        else {
            arr[head.val] = [head.next];
            head = head.next;
        }
    }
    
    return node || null;
}; 