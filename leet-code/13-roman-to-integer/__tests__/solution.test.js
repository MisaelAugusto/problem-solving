const solution = require('../solution');

test("13. Roman To Integer", () => {
  expect(solution('III')).toEqual(3);

  expect(solution('LVIII')).toEqual(58);

  expect(solution('MCMXCIV')).toEqual(1994);

  expect(solution('MMMCMXLI')).toEqual(3941);

  expect(solution('C')).toEqual(100);

  expect(solution('DCXXI')).toEqual(621);
});
