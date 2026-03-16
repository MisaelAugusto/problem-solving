const solution = require('../solution');

test("9. Palindrome Number", () => {
  expect(solution(121)).toEqual(true);

  expect(solution(-121)).toEqual(false);

  expect(solution(10)).toEqual(false);

  expect(solution(9229)).toEqual(true);

  expect(solution(123456)).toEqual(false);
});
