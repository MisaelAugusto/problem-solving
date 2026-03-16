const solution = require('../solution');

const TEST_CASES = [
  {
    call: solution([2,7,11,15], 9),
    output: [0, 1]
  },
  {
    call: solution([3,2,4], 6),
    output: [1, 2]
  },
  {
    call: solution([3,3], 6),
    output: [0, 1]
  },
  {
    call: solution([-1,-2, -4, -8], -6),
    output: [1, 2]
  },
  {
    call: solution([1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1], 11),
    output: [5, 11]
  }
];

test("1. Two Sum", () => {
  TEST_CASES.forEach(({ call, output }) =>
    expect(call).toStrictEqual(output)
  );
});
