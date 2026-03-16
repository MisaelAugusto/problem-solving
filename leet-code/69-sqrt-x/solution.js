/*
  Given a non-negative integer x, return the square root of x rounded down to
  the nearest integer. The returned integer should be non-negative as well.

  You must not use any built-in exponent function or operator.

  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

const mySqrt = (x) => {
  let start = 0, end = x;

  if (x === 1) return 1;

  while (start < end) {
    const middle = Math.floor((end + start) / 2);

    if (Math.pow(middle, 2) > x) end = middle;
    else if (Math.pow(middle, 2) < x) {
      if (start === middle) return middle;
      else start = middle;
    }
    else return middle;
  }

  return start;
};

module.exports = mySqrt;
