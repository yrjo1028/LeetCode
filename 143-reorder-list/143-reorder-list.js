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
    while (head) {
        map.push(head);
        head = head.next;
    }
    
    let list = map.shift();
    head = list;
    while (map.length) {
        head.next = map.pop();
        head = head.next;
        if (map.length) {
            head.next = map.shift();
            head = head.next;
        }
    }

    head.next = null;
    return list;
};