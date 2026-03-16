const solution = require('../solution');

test("27. Remove Element", () => {
  expect(solution([3, 2, 2, 3], 3)).toEqual(2);

  expect(solution([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);

  expect(solution([], 3)).toEqual(0);

  expect(solution([1, 1], 1)).toEqual(0);
});
