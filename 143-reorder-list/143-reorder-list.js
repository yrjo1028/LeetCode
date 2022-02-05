/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    let map = [];
    let list = head;
    
    while (head) {
        map.push(head.val);
        head = head.next;
    }
    
    head = list;
    while (head) {
        head.val = map.shift();
        head = head.next;
        
        if (map.length) {
            head.val = map.pop();
            head = head.next;
        }
    }

    return list;
};