const solution = require('../solution');

test("205. Isomorphic Strings", () => {
  expect(solution('egg', 'add')).toEqual(true);

  expect(solution('foo', 'bar')).toEqual(false);

  expect(solution('paper', 'title')).toEqual(true);

  expect(solution('badc', 'baba')).toEqual(false);
});
