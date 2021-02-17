//AQUI O FILTER ESTÁ FILTRANDO O ARRAY E RETORNANDO OS NUMEROS MENORES QUE 10
const num = [4, 7, 13, 42, 2, 8, 60, 33, 84, 12, 31, 3];

// const filterNum = num.filter((value, index, array) => {
//   console.log(
//     `Indice : ${index} - Valor : ${value} - Array completo: ${array}`,
//     );

//     return value < 10;
//   });

const filterNum = num.filter((value, index, array) => value < 10); //função reduzida
console.log(`\nFilter num = ${filterNum}`);
//
//
//
// RETORNAR PESSOAS QUE TENHAM MAIS DE 5 LETRAS NO NOME
// RETORNAR PESSOAS QUE TENHAM MAIS DE 50 ANOS
// RETORNAR PESSOAS QUE TERMINA O NOME COM A LETRA 'A'
const persons = [
  { name: 'Anderson', age: 23 },
  { name: 'Nubia', age: 22 },
  { name: 'Luis', age: 53 },
  { name: 'Edith', age: 63 },
  { name: 'Antonio', age: 61 },
];

const underFiveLetters = persons.filter(obj => obj.name.length < 5);
console.log(`\nUnder five letters: `);
console.log(underFiveLetters);

const moreFiftyYears = persons.filter(obj => obj.age > 50);
console.log(`\nMore than fifty years: `);
console.log(moreFiftyYears);

const initialLetterA = persons.filter(obj => obj.name.endsWith('a'));
console.log(`\nNames that begin with the letter A: `);
console.log(initialLetterA);

console.log('\n\n');
