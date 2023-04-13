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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let prev = null;

  const preorder = (tree) => {
    if (!tree) return;
    preorder(tree.right);
    preorder(tree.left);
    tree.right = prev;
    tree.left = null;
    prev = tree;
  };

  preorder(root);
};
