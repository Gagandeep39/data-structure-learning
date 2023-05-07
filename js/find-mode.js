/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function (root) {
  /**
   * Finnd the value that occurs max number of times
   * If there are multiple hen return all those in the array
   * 
   * Algorithm
   * 
   * 1. Create a hasmap to store unique occurence and count
   * 2. Max variable to stire max ccurence
   * 3. Result array for resuls
   * 4. Backtrack through the tree
   * 5. Check if value already exists in map, if not then insert else incremnt occurene count
   * 6. Calculate the max occurence by cmparing current val of max and count to node.max
   * 7. Iterate thoruhgm map using for loop to check how many keys have occurence equal to max and store it in an array
   * 8. Return the array
   */
  let map = new Map();
  let max = -Infinity;
  let res = [];
  const backtrack = (tree) => {
    if (!tree) return;
    if (!map.get(tree.val)) map.set(tree.val, 1);
    else {
      map.set(tree.val, map.get(tree.val) + 1);
    }
    max = Math.max(max, map.get(tree.val));

    backtrack(tree.left);
    backtrack(tree.right);
  };
  backtrack(root);
  for (let [k, v] of map) {
    if (v === max) res.push(k);
  }
  return res;
};
