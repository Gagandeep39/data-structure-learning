/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  /**
   * 1. Return null if both preorder  and inorder have length 0
   * 2. INitialize root a first val of preorder array
   * 3. Caculate mid as index of fist element of preorder in inorder
   * 4. Recuvierly run for left and right
   *    Left -> subset of preorder from 1, mid +1 and subset of inorder from 0, mid
   *    Right -> SUbset of preporder from mid+1 to end and subset of inorder rom from mid + 1 to end
   * 5. Return root
   */
  if (!preorder.length || !inorder.length) return null;

  let root = new TreeNode(preorder[0]);
  let mid = inorder.indexOf(preorder[0]);
  // .slice (start, end) where end is not inclusive
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(
    preorder.slice(mid + 1, preorder.length ),
    inorder.slice(mid + 1, inorder.length)
  );
  return root;
};

console.table(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
