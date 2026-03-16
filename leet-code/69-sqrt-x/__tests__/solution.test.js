const solution = require('../solution');

test("69. Sqrt(x)", () => {
  expect(solution(4)).toEqual(2);

  expect(solution(8)).toEqual(2);

  expect(solution(1)).toEqual(1);

  expect(solution(2)).toEqual(1);

  expect(solution(0)).toEqual(0);

  expect(solution(64)).toEqual(8);

  expect(solution(49)).toEqual(7);

  expect(solution(36)).toEqual(6);
});
