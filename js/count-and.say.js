/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';
  if (n === 2) return '11';
  let res = '11';

  let temp = '';
  for (let j = 2; j < n; j++) {
    for (let i = 0; i <= res.length - 1; i++) {
      let count = 1;
      while (res[i] === res[i + 1]) {
        count++;
        i++;
      }
      temp += `${count}${res[i]}`;
    }
    res = temp;
    temp = '';
  }
  return res;
};
// 1
// console.log(countAndSay(1));
// 11
// console.log(countAndSay(2));
// 21
// console.log(countAndSay(3));
// 1211
console.log(countAndSay(4));
