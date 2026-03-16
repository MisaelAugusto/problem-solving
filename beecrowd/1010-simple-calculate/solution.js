var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const [, units1, price1] = lines[0].split(' ');
const [, units2, price2] = lines[1].split(' ');

const total = (+units1 * +price1) + (+units2 * +price2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);
