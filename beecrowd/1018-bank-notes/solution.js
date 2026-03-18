const lines = ['576'];

let money = +lines[0];

console.log(money);

[100, 50, 20, 10, 5, 2, 1].forEach((value) => {
  console.log(`${Math.floor(money / value)} nota(s) de R$ ${value},00`);
  money %= value;
});
