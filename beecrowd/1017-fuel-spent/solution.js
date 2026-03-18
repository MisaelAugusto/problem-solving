const lines = [];

const CONSUMPTION = 12;

const time = +lines[0];
const speed = +lines[1];

const answer = time * speed / CONSUMPTION;

console.log(answer.toFixed(3));
