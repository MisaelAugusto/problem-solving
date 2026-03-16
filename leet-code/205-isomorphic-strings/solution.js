/*
  Given two strings s and t, determine if they are isomorphic.

  Two strings s and t are isomorphic if the characters in s can be replaced to
  get t.

  All occurrences of a character must be replaced with another character while
  preserving the order of characters. No two characters may map to the same
  character, but a character may map to itself.
*/

const isIsomorphic = (s, t) => {
  const lettersMapS = {};
  const lettersMapT = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in lettersMapS) {
      if (lettersMapS[s[i]] !== t[i]) return false;
    } else {
      lettersMapS[s[i]] = t[i];
    }

    if (t[i] in lettersMapT) {
      if (lettersMapT[t[i]] !== s[i]) return false;
    } else {
      lettersMapT[t[i]] = s[i];
    }
  }

  return true;
};

module.exports = isIsomorphic;
