/*
  Given a string s, find the length of the longest substring without repeating
  characters.
*/

const lengthOfLongestSubstring = (s) => {
  let len = 0, sub = s[0] || '';

  for (let i = 1; i < s.length; i++) {
    const charIndex = sub.indexOf(s[i]);

    if (charIndex !== - 1) {
      len = Math.max(sub.length, len);
      sub = sub.substring(charIndex + 1) + s[i];
    } else sub += s[i];
  }

  return Math.max(len, sub.length);
};

module.exports = lengthOfLongestSubstring;
