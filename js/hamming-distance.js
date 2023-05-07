/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return (x ^ y).toString(2)  // Perform XOR
  .replace(/0/g, '').length;  // Remove 0 and count number of 1
};

console.log(hammingDistance(1, 4));
