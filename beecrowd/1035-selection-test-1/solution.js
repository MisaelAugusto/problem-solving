const lines = ['2 3 2 6'];

let message = 'Valores nao aceitos';

const [A, B, C, D] = lines[0].split(' ').map(v => +v);

if ((B > C) && (D > A) && ((C + D) > (A + B)) && (C > 0) && (D > 0) && (A % 2 == 0))
  message = 'Valores aceitos';

console.log(message);
