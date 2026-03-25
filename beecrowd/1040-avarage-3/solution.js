const lines = ['2.0 6.5 4.0 9.0'];

const [N1, N2, N3, N4] = lines[0].split(' ').map(v => +v);

const avarage = ((N1 * 2) + (N2 * 3) + (N3 * 4) + (N4 * 1)) / 10;

console.log(`Media: ${avarage.toFixed(1)}`);

if (avarage >= 7)
  console.log('Aluno aprovado.');
else if (avarage >= 5) {
  const N5 = +lines[1];

  const finalAvarage = (avarage + N5) / 2;

  console.log('Aluno em exame.');
  console.log(`Nota do exame: ${N5.toFixed(1)}`);
  console.log(`Aluno ${finalAvarage >= 5 ? 'aprovado' : 'reprovado'}.`);
  console.log(`Media final: ${finalAvarage.toFixed(1)}`);
} else
  console.log('Aluno reprovado.');
