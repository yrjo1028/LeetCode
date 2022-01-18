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
        
        let not_empty = true;
        while (not_empty) {
            if (node.val > arr.val) {
                cur.next = new ListNode(arr.val);
                cur = cur.next;
                arr = arr.next;
                if (!arr) {
                    cur.next = node;
                    not_empty = false;
                }
            }
            else {
                cur.next = new ListNode(node.val);
                cur = cur.next;
                node = node.next;
                if (!node) {
                    cur.next = arr;
                    not_empty = false;
                }
            }
        }
        
        sort_arr = sort_arr.next;
    }
    
    return sort_arr;
};

    
// let arr = lists.pop();
// return sortList(lists, arr);
var sortList = function(lists, arr) {
    
    let sort_arr = new ListNode(0);
    if(arr) {
        let cur = sort_arr;
        let node = lists.pop();
    
        while (node !== null) {
        }
    }
    

    sort_arr = sort_arr.next;
    if (lists.length) {
        sort_arr = sortList(lists, sort_arr);
    }
    
    return sort_arr;
}