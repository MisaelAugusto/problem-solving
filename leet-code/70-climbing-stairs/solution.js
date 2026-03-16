/*
  You are climbing a staircase. It takes n steps to reach the top.

  Each time you can either climb 1 or 2 steps. In how many distinct ways can you
  climb to the top?
*/

// const climbStairs = (n) => {
//   if (n < 4) return n;

//   let fib = [1, 1, 2];

//   for (let i = 4; i <= n + 1; i++) {
//     fib.push(fib[i - 2] + fib[i - 3]);
//   }

//   return fib[n];
// };

const climbStairs = (n) => {
  let results = [1, 2, 3];

  for (let i = 3; i < n; i++) {
    results.push(results[i - 1] + results[i - 2]);
  }

  return results[n - 1];
};

module.exports = climbStairs;
