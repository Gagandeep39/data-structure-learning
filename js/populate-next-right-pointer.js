/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  /**
   * Algorimth
   * 
   * Traverse the tree level by level
   * Store all nodes in each level in an array and update the pointer
   * 1. Create a queue with root in it
   * 2. RUn a while loop until que lengthh is > 1
   * 3. Crate a temp array to store nodes at each level, 
   * 4. Run another while loop till length of queye is 0
   *    a. Pop the first item in queue 
   *    b. Asign next item or null to .next
   *    c. If There are child node presend then insert then in the tep array
   * 5. Assign queue = tempArray
   */
  if (root == null) return root;
  let queue = [root];
  while (queue.length != 0) {
    let next = [];
    while (queue.length != 0) {
      let node = queue.shift();
      node.next = queue[0] || null;
      if (node.left != null) {
        next.push(node.left);
        next.push(node.right);
      }
    }
    queue = next;
  }
  return root;
};
