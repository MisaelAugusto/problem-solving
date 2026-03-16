const solution = require('../solution');

test("67. Add Binary", () => {
  expect(solution('11', '1')).toEqual('100');

  expect(solution('1010', '1011')).toEqual('10101');

  expect(solution('0', '0')).toEqual('0');

  expect(solution('0', '1001')).toEqual('1001');

  expect(solution('10111', '0')).toEqual('10111');
});
