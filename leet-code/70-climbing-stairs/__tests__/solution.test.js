const solution = require('../solution');

test("70. Climbing Stairs", () => {
  expect(solution(1)).toEqual(1);

  expect(solution(2)).toEqual(2);

  expect(solution(3)).toEqual(3);

  expect(solution(4)).toEqual(5);

  expect(solution(5)).toEqual(8);

  expect(solution(6)).toEqual(13);

  expect(solution(7)).toEqual(21);
});
