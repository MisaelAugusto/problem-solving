const solution = require('../solution');

test("392. Is Subsequence", () => {
  expect(solution('abc', 'ahbgdc')).toEqual(true);

  expect(solution('axc', 'ahbgdc')).toEqual(false);

  expect(solution('axc', 'ahbgdc')).toEqual(false);

  expect(solution('', 'ahbgdc')).toEqual(true);

  expect(solution('ahda', 'ahbgdc')).toEqual(false);

  expect(solution('abc', 'acb')).toEqual(false);

  expect(solution('aaaaaa', 'bbaaaa')).toEqual(false);

  expect(solution('bb', 'ahbgdc')).toEqual(false);
});
