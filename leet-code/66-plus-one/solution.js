/*
  You are given a large integer represented as an integer array digits, where
  each digits[i] is the ith digit of the integer. The digits are ordered from
  most significant to least significant in left-to-right order. The large
  integer does not contain any leading 0's.

  Increment the large integer by one and return the resulting array of digits.
*/

const plusOne = (digits) => {
  let i = digits.length - 1, carryIn = 1;

  while (i > -1 && carryIn > 0) {
    const sum = digits[i] + carryIn;

    digits[i--] = sum % 10;
    carryIn = Math.floor(sum / 10);
  }

  if (carryIn) digits = [carryIn, ...digits];

  return digits;
};

module.exports = plusOne;
