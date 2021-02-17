//AQUI O REDUCE VAI SOMAR TODOS OS NUMEROS
const num = [4, 7, 13, 42, 2, 8, 60, 33, 84, 12, 31, 3];

// const doubleNum = num.reduce((acumulador, value, index, array) => {
//     acumulador =+ value;
//     return acumulador;
//   },0);// O ZERO É PASSADO COMO PARAMETRO DE INICIO DO ACUMULADOR

const doubleNum = num.reduce(
  (acumulador, value, index, array) => (acumulador += value),
  0,
); //função reduzida
console.log(`\nNumber = ${num}`);
console.log(`Double = ${doubleNum}`);

// RETORNE A PESSOA MAIS VELHA
const persons = [
  { name: 'Anderson', age: 23 },
  { name: 'Nubia', age: 22 },
  { name: 'Luis', age: 53 },
  { name: 'Edith', age: 63 },
  { name: 'Antonio', age: 61 },
];

const oldPerson = persons.reduce((acumulador, value) => {
  if (acumulador.age > value.age) return acumulador;
  return value;
}); // Se eu não passar o parametro zero, o acumulador começa no primeiro value, e o value se torna o segundo

console.log(oldPerson);
