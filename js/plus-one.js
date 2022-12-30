/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] + 1 > 9) {
      carry = 1;
      digits[i] = 0;
    } else {
      carry = 0;
      digits[i]++;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};

console.log(plusOne([8]));
