const solution = require('../solution');

test("35. Search Insert Position", () => {
  expect(solution([1, 3, 5, 6], 5)).toEqual(2);

  expect(solution([1, 3, 5, 6], 2)).toEqual(1);

  expect(solution([1, 3, 5, 6], 7)).toEqual(4);

  expect(solution([4], 4)).toEqual(0);

  expect(solution([4], -1)).toEqual(0);

  expect(solution([4], 5)).toEqual(1);

  expect(solution([-5, -3, -2, 0, 1, 3, 5, 6, 9, 14, 17], 2)).toEqual(5);

  expect(solution([-5, -3, -2, 0, 4], -1)).toEqual(3);

  expect(solution([1, 3, 5], 4)).toEqual(2);
});
