const solution = require('../solution');

test("66. Plus One", () => {
  expect(solution([1, 2, 3])).toEqual([1, 2, 4]);

  expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2, 2]);

  expect(solution([9])).toEqual([1, 0]);

  expect(solution([0])).toEqual([1]);
});
