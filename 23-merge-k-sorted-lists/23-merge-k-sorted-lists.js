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
        let cur = sort_arr;
        let node = lists.pop();
        
        while(node && cur) {
            if (cur.val >= node.val) {
                cur.next = new ListNode(cur.val, cur.next);
                cur.val = node.val;
                node = node.next;
            }
            else if (!cur.next) {
                cur.next = node;
                node = null;
            }
            else {
                cur = cur.next;
            }
        }
    }
    
    return sort_arr;
};