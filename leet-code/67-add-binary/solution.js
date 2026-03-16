/*
  Given two binary strings a and b, return their sum as a binary string.
*/

const addBinary = (a, b) => {
  let i = a.length - 1, j = b.length - 1;

  let result = '', carryIn = 0;
  while (i > -1 || j > -1) {
    const sum = a[i] ^ b[j] ^ carryIn;

    result = sum + result;
    carryIn = (a[i] & b[j]) | (a[i] & carryIn) | (b[j] & carryIn);
    i--;
    j--;
  }

  if (carryIn) result = carryIn + result;

  return result;
};

module.exports = addBinary;
