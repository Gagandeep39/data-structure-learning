/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let curr = head;
  head = curr.next;
  while (curr && curr.next) {
    let temp = curr.next.next;
    curr.next.next = curr;
    curr.next = temp && temp.next ? temp.next : temp;
    curr = temp;
  }
  return head;
};

let l1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));

console.log(swapPairs(head));
