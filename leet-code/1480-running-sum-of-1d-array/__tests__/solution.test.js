const solution = require('../solution');

test("1480. Running Sum of 1d Array", () => {
  expect(solution([1,2,3,4])).toEqual([1, 3, 6, 10]);

  expect(solution([1,1,1,1,1])).toEqual([1,2,3,4,5]);

  expect(solution([3,1,2,10,1])).toEqual([3,4,6,16,17]);

  expect(solution([3, -7, 4, -1, 0, -2])).toEqual([3, -4, 0, -1, -1, -3]);

  expect(solution([9])).toEqual([9]);

  expect(solution([])).toEqual([]);
});
