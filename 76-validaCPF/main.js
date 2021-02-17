// let value = '705.484.450.52';
let cpf = '438.870.418-01';

// A expressão regular => /\D+/g  seleciona todos os campos (exceto numeros) em uma string
let cpfArray = cpf.replace(/\D+/g, '').split('');

for (let i in cpfArray) {
  cpfArray[i] = Number(cpfArray[i]);
}

cpfArray.pop();
cpfArray.pop();

console.log('POP:');
console.log(cpfArray);

let result = 0;

let cont = 10;
do {
  for (let value of cpfArray) {
    let res = value * cont;
    result += res;
    cont--;
  }
} while (cont >= 2);

console.log('\nTotal result:');
console.log(result);

let finalResult = 11 - (result % 11);
finalResult = finalResult > 9 ? 0 : finalResult;

console.log('\nfinalResult');
console.log(finalResult);

cpfArray.push(finalResult);
console.log('\ncpfArray');
console.log(cpfArray.join(' '));

result = 0;

cont = 11;
do {
  for (let value of cpfArray) {
    let res = value * cont;
    result += res;
    cont--;
  }
} while (cont >= 2);

console.log('\nTotal result2:');
console.log(result);

finalResult = 11 - (result % 11);
finalResult = finalResult > 9 ? 0 : finalResult;

console.log('\nfinalResult2');
console.log(finalResult);

cpfArray.push(finalResult);
console.log('\ncpfArray2');

console.log(cpfArray.join(''));
