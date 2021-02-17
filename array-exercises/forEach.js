//AQUI O FOREACH VAI SOMAR TODOS OS NUMEROS
const num = [4, 7, 13, 42, 2, 8, 60, 33, 84, 12, 31, 3];

let result = 0;

num.forEach(value => {
  result += value;
});

console.log(result);
