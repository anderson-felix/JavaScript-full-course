// Retorne a soma do dobro de todos os pares
// -> filtrar pares
// -> dobrar os valores
// -> reduzir (somar tudo)

const nums = [4, 7, 13, 42, 2, 8, 60, 33, 84, 12, 31, 3];

const num = nums
  .filter(value => value % 2 === 0)
  .map(value => value * 2)
  .reduce((acc, value) => (acc += value), 0);

console.log(num);
