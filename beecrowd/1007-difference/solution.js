var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const leftProduct = +lines[0] * +lines[1];
const rightProduct = +lines[2] * +lines[3];

console.log(`DIFERENCA = ${leftProduct - rightProduct}`);
