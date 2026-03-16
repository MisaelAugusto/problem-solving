var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const sum = (+lines[0] * 2) + (+lines[1] * 3) + (+lines[2] * 5);
const avarage = sum / 10;

console.log(`MEDIA = ${avarage.toFixed(1)}`);
