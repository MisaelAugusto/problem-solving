/*
  Given an array of integers nums and an integer target, return indices of the
  two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, and you may
  not use the same element twice.

  You can return the answer in any order.
*/

// const twoSum = (nums, target) => {
//   const differences = new Set();

//   for (let index = 0; index < nums.length; index++) {
//     const diff = target - nums[index];

//     const diffIndex = [...differences].indexOf(diff);
//     console.log(nums[index], diff, differences, diffIndex);
//     if (diffIndex > -1) {
//       return [diffIndex, index];
//     }

//     differences.add(nums[index]);
//   };

//   return [];
// };

// const twoSum = (nums, target) => {
//   const N = nums.length;

//   for (let i = 0; i < N - 1; i++) {
//     for (let j = i + 1; j < N; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   };

//   return [];
// };

// const twoSum = (nums, target) => {
//   const differences = {};

//   for (let i = 0; i < nums.length; i++) {
//     if (differences[nums[i]] !== undefined) {
//       return [differences[nums[i]], i];
//     }

//     differences[target - nums[i]] = i;
//   };

//   return [];
// };

const twoSum = (nums, target) => {
  const diffs = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (diffs.has(nums[i])) return [diffs.get(nums[i]), i];

    diffs.set(target - nums[i], i);
  };

  return [];
};

module.exports = twoSum;
