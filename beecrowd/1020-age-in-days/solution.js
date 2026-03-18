const lines = ['400'];

let days = +lines[0];

console.log(`${Math.floor(days / 365)} ano(s)`);

days %= 365;

console.log(`${Math.floor(days / 30)} mes(es)`);

days %= 30;

console.log(`${days} dia(s)`);

