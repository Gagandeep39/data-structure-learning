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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  if (!inorder.length || !postorder.length) return null;

  let root = new TreeNode(postorder[postorder.length - 1]);
  let mid = inorder.indexOf(postorder[postorder.length - 1]);

  root.left = buildTree(inorder.slice(0, mid), postorder.slice(0, mid));
  root.right = buildTree(
    inorder.slice(mid + 1, inorder.length),
    postorder.slice(mid, postorder.length - 1)
  );
  return root;
};
// [9,3,15,20,7], postorder = [9,15,7,20,3]
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
