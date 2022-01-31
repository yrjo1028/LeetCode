/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    
    if (head === null || head.next === null) {
        return head;
    }
    
    let arr = null;
    let p = null;
    
    while (head) {
        let val = head.val;
        if (!head.next || val !== head.next.val) {
            let node = new ListNode(head.val);
            if (p) {
                p.next = node;
                p = p.next;
            } else {
                arr = node;
                p = arr;
            }
            head = head.next;
        }
        else {
            while (head && head.val === val) {
                head = head.next;
            }
        }
    }
    
    return arr;
};