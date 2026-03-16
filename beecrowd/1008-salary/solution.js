var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const salary = +lines[1] * +lines[2];

console.log(`NUMBER = ${lines[0]}`);
console.log(`SALARY = U$ ${salary.toFixed(2)}`);
