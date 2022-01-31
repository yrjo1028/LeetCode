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
    
    // 리스트가 1개 이하 일 경우 그대로 리턴
    if (head === null || head.next === null) {
        return head;
    }
    
    // 중복제거할 리스트와 포인터 생성
    let arr = null;
    let p = null;
    
    // 주어진 배열을 모두 조회할 때 까지 반복
    while (head) {
        let val = head.val;
        if (!head.next || val !== head.next.val) {
            let node = new ListNode(val);
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