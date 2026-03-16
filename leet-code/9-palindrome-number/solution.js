/*
  Given an integer x, return true if x is a
  palindrome, and false otherwise.
*/

// const isPalindrome = (x) => {
//   if (x < 0) return false;

//   const xString = x.toString();

//   let i = 0, j = xString.length - 1;
//   while (i < j) {
//     if (xString[i] !== xString[j]) return false;
//     i++;
//     j--;
//   }

//   return true;
// };

// const isPalindrome = (x) => {
//   if (x < 0) return false;

//   let tempX = x;
//   let length = 0;
//   while (tempX >= 10) {
//     tempX = Math.floor(tempX / 10);
//     length++;
//   }

//   tempX = x;

//   let y = 0;
//   while (tempX > 0) {
//     y += (tempX % 10) * Math.pow(10, length);
//     tempX = Math.floor(tempX / 10);
//     length--;
//   }

//   return x === y;
// };

const isPalindrome = (x) => {
  if (x < 0) return false;

  let tempX = x, y = 0;
  while (tempX > 0) {
    y = (y * 10) + (tempX % 10);
    tempX = Math.floor(tempX / 10);
  }

  return x === y;
};

module.exports = isPalindrome;
