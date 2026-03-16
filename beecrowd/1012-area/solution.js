var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const PI = 3.14159;
const [A, B, C] = lines[0].split(' ').map(value => +value);

console.log(`TRIANGULO: ${(A * C / 2).toFixed(3)}`);
console.log(`CIRCULO: ${(PI * Math.pow(C, 2)).toFixed(3)}`);
console.log(`TRAPEZIO: ${((A + B) * C / 2).toFixed(3)}`);
console.log(`QUADRADO: ${(B * B).toFixed(3)}`);
console.log(`RETANGULO: ${(A * B).toFixed(3)}`);



