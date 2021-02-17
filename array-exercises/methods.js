const names = ['Anderson', 'Nubia', 'Frodo'];

console.log(`\n  Métodos para arrays`);

console.log(`\n1 array - ${names}`);

names.push('Sant');
console.log(`\n2 push - ${names}`); //adiciona no fim

names.unshift('Belinha');
console.log(`\n3 unshift - ${names}`); //adiciona no inicio

names.pop();
console.log(`\n4 pop - ${names}`); //remove do fim

names.shift();
console.log(`\n5 shift - ${names}`); //remove do começo

console.log(`\n6 slice - ${names.slice(0, 2)}`); //seleciona elementos do array, não incluindo o parâmetro de parada

console.log(`\n7 join - ${names.join('-')}`); //transforma um array em string juntando pelo parâmentro passado

//

console.log(`\n\n  Métodos para strings`);

const username = 'Anderson Felix Moraes de Souza';

console.log(`\n1 split - ${username.split(' ')}`); //transforma uma string em array separando pelo parametro passado

//

console.log(`\n\n  Método splice`);

//               -6      -5       -4       -3        -2       -1
//                0       1        2        3         4        5
const array = ['João', 'Maria', 'José', 'Marcia', 'Carlos', 'Lúcia'];
console.log(`\noriginal - ${array}`);
// array.splice(indice, qntd_a_remover, ...elem_a_adicionar)

// array.splice(2, 1);
// array.splice(-2, 1);
// array.splice(2, 0, 'Anderson', 'Nubia');
array.splice(0, 2, 'Carlos', 'Carol');
console.log(`\n1 splice - ${array}`);

//

console.log(`\n\n  Métodos para concatenar`);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2, 'Anderson', 23); //método concat concatena valores
const a4 = [...a1, ...a2];

console.log(`\n 1 concat = ${a3}`);
console.log(`\n 2 spread = ${a4}`);

console.log(`\n`);
