/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = nums1.concat(nums2).sort((a, b) => a - b);
  if (arr.length < 2) return arr[0];
  let mid = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([], [2, 3]));
console.log(findMedianSortedArrays([3], [-2, -1]));
console.log(findMedianSortedArrays([], [1, 2, 3, 4, 5]));
