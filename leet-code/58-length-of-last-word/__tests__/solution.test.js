const solution = require('../solution');

test("58. Length of Last Word", () => {
  expect(solution('Hello World')).toEqual(5);

  expect(solution('   fly me   to   the moon  ')).toEqual(4);

  expect(solution('luffy is still joyboy')).toEqual(6);

  expect(solution('    t     a     ')).toEqual(1);

  expect(solution('s')).toEqual(1);
});
