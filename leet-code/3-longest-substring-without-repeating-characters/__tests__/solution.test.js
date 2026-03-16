const solution = require('../solution');

test("3. Longest Substring Without Repeating Characters", () => {
  expect(solution('abcabcbb')).toEqual(3);

  expect(solution('bbbbb')).toEqual(1);

  expect(solution('pwwkew')).toEqual(3);

  expect(solution('')).toEqual(0);

  expect(solution('ababab')).toEqual(2);

  expect(solution('abababac')).toEqual(3);

  expect(solution('abcdefg')).toEqual(7);
});
