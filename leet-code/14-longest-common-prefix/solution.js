/*
  Write a function to find the longest common prefix string amongst an array of
  strings.

  If there is no common prefix, return an empty string "".
*/

// const longestCommonPrefix = (strs) => {
//   let prefix = strs[0] || '';

//   for (let i = 1; i < strs.length; i++) {
//     let j = 0;

//     while (j < strs[i].length && prefix[j] === strs[i][j]) {
//       j++;
//     }

//     prefix = prefix.substring(0, j);
//   }

//   return prefix;
// };

const longestCommonPrefix = (strs) => {
  strs.sort();

  let first = strs[0] || '', last = strs[strs.length - 1] || '', i = 0;
  while (i < last.length && first[i] === last[i]) {
    i++;
  }

  return first.substring(0, i);
};

module.exports = longestCommonPrefix;
