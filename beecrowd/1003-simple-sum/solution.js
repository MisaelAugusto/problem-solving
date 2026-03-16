var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log(`SOMA = ${+lines[0] + +lines[1]}`);
