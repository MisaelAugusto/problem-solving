const solution = require('../solution');

test("724. Find Pivot Index", () => {
  expect(solution([1,7,3,6,5,6])).toEqual(3);

  expect(solution([1, 2, 3])).toEqual(-1);

  expect(solution([2,1,-1])).toEqual(0);

  expect(solution([])).toEqual(-1);
});
