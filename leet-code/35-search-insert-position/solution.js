/*
  Given a sorted array of distinct integers and a target value, return the index
  if the target is found. If not, return the index where it would be if it were
  inserted in order.

  You must write an algorithm with O(log n) runtime complexity.
*/

const searchInsert = (nums, target) => {
  let start = 0, end = nums.length;

  let middle = Math.floor(start + (end - start) / 2);

  while (start < end) {
    if (nums[middle] === target) return middle;
    else if (nums[middle] > target) end = middle;
    else start = middle + 1;

    middle = Math.floor(start + (end - start) / 2);
  }

  return middle;
};

module.exports = searchInsert;
