const lines = ['556'];

let time = +lines[0];

const hours = Math.floor(time / 3600);

time %= 3600;

const minutes = Math.floor(time / 60);

time %= 60;

console.log(`${hours}:${minutes}:${time}`);
