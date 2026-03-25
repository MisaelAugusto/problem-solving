const lines = ['4 3'];

const PRICES = [4, 4.5, 5, 2, 1.5];

const [code, units] = lines[0].split(' ');

const total = PRICES[+code - 1] * +units;

console.log(`Total: R$ ${total.toFixed(2)}`);
