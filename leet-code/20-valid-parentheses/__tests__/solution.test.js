const solution = require('../solution');

test("20. Valid Parentheses", () => {
  expect(solution('()')).toEqual(true);

  expect(solution('()[]{}')).toEqual(true);

  expect(solution('(]')).toEqual(false);

  expect(solution('([()])')).toEqual(true);

  expect(solution('{([()])}[{()}]')).toEqual(true);

  expect(solution('{([(])}[{()}]')).toEqual(false);

  expect(solution('{(]}')).toEqual(false);

  expect(solution('{[])}')).toEqual(false);

  expect(solution('(((')).toEqual(false);

  expect(solution('[([]])')).toEqual(false);
});
