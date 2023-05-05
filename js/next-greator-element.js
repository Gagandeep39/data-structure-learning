/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let res = [];
  for (let i = 0; i < nums1.length; i++) {
    const element = nums1[i];

    // Look for the index of this elemnt in num2
    let num2Idx = nums2.indexOf(element);

    // CHeck if the element after this index is greater
    for (let j = num2Idx; j < nums2.length; j++) {
      const secondElement = nums2[j];

      // Check if greater
      if (secondElement > element) {
        res.push(secondElement);
        break;
      }

      // Add -1 if reached the end of num2 array
      if (j == nums2.length - 1) {
        res.push(-1);
        break;
      }
    }
  }
  return res;
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
