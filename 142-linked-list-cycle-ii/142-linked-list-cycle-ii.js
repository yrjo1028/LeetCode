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
    if (head == null || head.next == null) {
        return null;
    }
    
    let slow = head;
    let fast = head;
    let node = head;
    
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {                      // there is a cycle
            while(slow != node) {               // found the entry location
                slow  = slow.next;
                node = node.next;
            }
            return node;
        }
    }
    return null;    
}; 