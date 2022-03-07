/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    
    let ans = null;
    
    if (list1 || list2) {
        if (list1 === null) {
            return list2;
        }
        if (list2 === null) {
            return list1;
        }
        
        if (list1.val > list2.val) { 
            ans = list2;
            list2 = list2.next;
        }
        else {
            ans = list1;
            list1 = list1.next;
        }
        
        let p = ans;
        while (list1 || list2) {
            if (list1 && list2) {
                if (list1.val > list2.val) {
                    p.next = list2;
                    p = p.next;
                    list2 = list2.next;
                }
                else {
                    p.next = list1;
                    p = p.next;
                    list1 = list1.next;
                }
            }
            else if (list1) {
                p.next = list1;
                list1 = null;
            }
            else {
                p.next = list2;
                list2 = null;
            }
        }
    }
    
    return ans;
};