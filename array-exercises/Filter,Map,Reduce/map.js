//AQUI O MAP ESTÁ FDOBRANDO OS NUMEROS
const num = [4, 7, 13, 42, 2, 8, 60, 33, 84, 12, 31, 3];

// const doubleNum = num.map((value, index, array) => {
//   console.log(
//     `Indice : ${index} - Valor : ${value} - Array completo: ${array}`,
//     );

//     return value * 2;
//   });

const doubleNum = num.map((value, index, array) => value * 2); //função reduzida
console.log(`\nNumber = ${num}`);
console.log(`Double = ${doubleNum}`);
//
//
//
// RETORNAR O NOME DE CADA PESSOA
// ADICIONE UMA CHAVE ID EM CADA OBJETO
// REMOVER A CHAVE NAME DO OBJETO
const persons = [
  { name: 'Anderson', age: 23 },
  { name: 'Nubia', age: 22 },
  { name: 'Luis', age: 53 },
  { name: 'Edith', age: 63 },
  { name: 'Antonio', age: 61 },
];

const nameOfEachPerson = persons.map(obj => obj.name);
console.log(`\nName of each person: `);
console.log(nameOfEachPerson);

const addIdForEachPerson = persons.map((obj, id) => ({
  id,
  name: obj.name,
  age: obj.age,
}));
console.log(`\nAdd id for each person: `);
console.log(addIdForEachPerson);

const removeKeyName = persons.map(obj => {
  const newObj = { ...obj }; //Para não alterar o valor original do bojeto, eu crio outro usando o spread operator
  delete newObj.name;
  return newObj;
});
console.log(`\nRemove key name: `);
console.log(removeKeyName);

console.log('\n\n');
