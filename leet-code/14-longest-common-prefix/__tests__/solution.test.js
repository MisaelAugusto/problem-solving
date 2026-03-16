const solution = require('../solution');

test("14. Longest Common Prefix", () => {
  expect(solution(['flower', 'flow', 'flight'])).toEqual('fl');

  expect(solution(['dog', 'racecar', 'car'])).toEqual('');

  expect(solution(['computer', 'computer', 'computer'])).toEqual('computer');

  expect(solution([])).toEqual('');
});
