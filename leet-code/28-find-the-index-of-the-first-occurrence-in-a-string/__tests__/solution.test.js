const solution = require('../solution');

test("28. Find the Index of the First Occurrence in a String", () => {
  expect(solution('sadbutsad', 'sad')).toEqual(0);

  expect(solution('leetcode', 'leeto')).toEqual(-1);

  expect(solution('leetcode', 'code')).toEqual(4);

  expect(solution('leetcode', 'codecodecode')).toEqual(-1);

  expect(solution('', '')).toEqual(0);

  expect(solution('', 'abc')).toEqual(-1);

  expect(solution('abc', '')).toEqual(0);
});
