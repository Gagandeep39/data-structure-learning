/**
 * @param {number} num
 * @return {boolean}
 */
var isPalindrome = function (num) {
  // Algorthm
  // 1. Convert number to string
  // 2. Loop through string and compare first and last character
  // 3. If they are not equal return false
  // 4. If they are equal, compare second and second to last character
  let numStr = num.toString();
  for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(123));
