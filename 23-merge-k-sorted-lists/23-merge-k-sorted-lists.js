/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 
var mergeKLists = function(lists) {

    lists = lists.filter(arr => arr !== null);
    let sort_arr = lists.shift() || null;
    
    while(lists.length) {
        let arr = sort_arr;
        let node = lists.pop();
        
        sort_arr = new ListNode();
        let cur = sort_arr;
        
        while (node && arr) {
            if (node.val > arr.val) {
                cur.next = new ListNode(arr.val);
                cur = cur.next;
                arr = arr.next;
                if (!arr) {
                    cur.next = node;
                }
            }
            else {
                cur.next = new ListNode(node.val);
                cur = cur.next;
                node = node.next;
                if (!node) {
                    cur.next = arr;
                }
            }
        }
        
        sort_arr = sort_arr.next;
    }
    
    return sort_arr;
};