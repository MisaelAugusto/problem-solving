/*
  Given an array of integers nums, calculate the pivot index of this array.

  The pivot index is the index where the sum of all the numbers strictly to the
  left of the index is equal to the sum of all the numbers strictly to the
  index's right.

  If the index is on the left edge of the array, then the left sum is 0 because
  there are no elements to the left. This also applies to the right edge of the
  array.

  Return the leftmost pivot index. If no such index exists, return -1.
*/

// const pivotIndex = (nums) => {
//   const N = nums.length;

//   let leftSums = [];
//   for (let i = 0; i < N; i++) {
//     leftSums.push(nums[i] + (leftSums[i - 1] || 0));
//   }

//   let rightSums = [];
//   for (let i = N - 1; i > -1; i--) {
//     rightSums = [nums[i] + (rightSums[0] || 0), ...rightSums];
//   }

//   for (let i = 0; i < N; i++) {
//     if (leftSums[i] === rightSums[i]) return i;
//   }

//   return -1;
// };

const pivotIndex = (nums) => {
  const N = nums.length;

  let i = 1, j = N - 2;
  let leftSum = nums[0], rightSum = nums[N - 1];
  while (i < N && j > -1) {
    console.log(leftSum, rightSum, i, j);
    if (leftSum > rightSum) {
      rightSum += nums[j];
      j--;
    } else if ((leftSum < rightSum)) {
      leftSum += nums[i];
      i++;
    } else {
      return i === j ? i : -1;
    }
  }

  return leftSum === 0 || rightSum === 0 ? 0 : -1;
};

module.exports = pivotIndex;
