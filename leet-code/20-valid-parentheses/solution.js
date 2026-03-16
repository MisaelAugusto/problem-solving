/*
  Given a string s containing just the characters '(', ')', '{', '}', '[' and
  ']', determine if the input string is valid.

  An input string is valid if:

  Open brackets must be closed by the same type of brackets.
  Open brackets must be closed in the correct order.
  Every close bracket has a corresponding open bracket of the same type.
*/

// const isValid = (s) => {
//   let opened = '';

//   const characters = ['(', '[', '{', ')', ']', '}'];

//   for (let i = 0; i < s.length; i++) {
//     const index = characters.indexOf(s[i]);

//     if (index < 3) opened += s[i];
//     else {
//       const pair = opened[opened.length - 1] + s[i];

//       if (pair !== characters[index - 3] + characters[index]) return false;
//       opened = opened.substring(0, opened.length - 1);
//     };
//   }

//   return opened.length === 0;
// };

const isValid = (s) => {
  let opened = [];

  const map = {'(' : ')', '[' : ']', '{': '}'};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) opened.push(s[i]);
    else if (s[i] !== map[opened.pop()]) return false;
  }

  return opened.length === 0;
};

module.exports = isValid;
