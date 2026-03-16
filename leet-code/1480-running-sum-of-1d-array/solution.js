/*
  Given an array nums. We define a running sum of an array as
  runningSum[i] = sum(nums[0]…nums[i]).

  Return the running sum of nums.
*/

// const runningSum = (nums) => {
//   return nums.reduce((result, num, index) =>
//     [...result, (result[index - 1] || 0) + num]
//   , []);
// };

// const runningSum = (nums) => {
//   if (nums.length === 0) return [];

//   let result = [nums[0]];

//   for (let i = 1; i < nums.length; i++) {
//     result.push(result[i - 1] + nums[i]);
//   }

//   return result;
// };

const runningSum = (nums) => {
  let result = [], acc = 0;

  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
    result.push(acc);
  }

  return result;
};

module.exports = runningSum;
