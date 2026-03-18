const lines = [];

const greatest = (a, b) => ((a + b + Math.abs(a - b)) / 2);

const [a, b, c] = lines[0].split(' ');
const answer = greatest(+a, greatest(+b, +c));

console.log(`${answer} eh o maior`);
