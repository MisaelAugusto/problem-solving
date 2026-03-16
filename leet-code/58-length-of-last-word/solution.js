/*
  Given a string s consisting of words and spaces, return the length of the last
  word in the string.

  A word is a maximal substring consisting of non-space characters only.
*/

// const lengthOfLastWord = (s) => {
//   const sList = s.trim().split(' ');

//   return sList[sList.length - 1].length;
// };

const lengthOfLastWord = (s) => {
  let end = -1, i = s.length - 1;

  while (i > -1 && (s[i] !== ' ' || end < 0)) {
    if (s[i] !== ' ' && end < 0) end = i;

    i--;
  }

  return end - i;
};

module.exports = lengthOfLastWord;
