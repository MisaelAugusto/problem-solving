var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const sum = (+lines[0] * 3.5) + (+lines[1] * 7.5);
const avarage = sum / 11;

console.log(`MEDIA = ${avarage.toFixed(5)}`);
