const solution = require('../solution');

test("26. Remove Duplicates from Sorted Array", () => {
  expect(solution([1, 1, 2])).toEqual(2);

  expect(solution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);

  expect(solution([])).toEqual(0);

  expect(solution([1, 1])).toEqual(1);
});
