const lines = [];

const [x1, y1] = lines[0].split(' ');
const [x2, y2] = lines[1].split(' ');

const answer = Math.sqrt(Math.pow(+x2 - +x1, 2) + Math.pow(+y2 - +y1, 2))

console.log(answer.toFixed(4));

