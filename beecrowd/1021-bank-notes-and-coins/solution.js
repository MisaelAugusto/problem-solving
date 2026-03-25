const lines = ['100.11'];

let money = +lines[0];

console.log('NOTAS:');
[100, 50, 20, 10, 5, 2].forEach((value) => {
  console.log(`${Math.floor(money / value)} nota(s) de R$ ${value.toFixed(2)}`);
  money %= value;
});

let cents = money * 100;

console.log('MOEDAS:');
[100, 50, 25, 10, 5, 1].forEach((value) => {
  console.log(`${Math.floor(cents / value)} moeda(s) de R$ ${(value/100).toFixed(2)}`);
  cents = Math.round(cents) % value;
});
