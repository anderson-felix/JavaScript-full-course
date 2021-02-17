// O FOR OF RETORNA O VALOR DIRETO, QUANDO EU QUERO SÓ O VALOR É MELHOR USAR ELE, FUNCIONA COM ARRAY OU STRING

const frutas = ["macã", "pêra", "banana", "melancia", "uva"];

const nome = "anderson felix";

console.log("\n\n");

for (let i of nome) {
  console.log(i);
}

console.log("\n\n");

for (let i of frutas) {
  console.log(i);
}

console.log("\n\n");

let cont = 0;
for (let i of frutas) {
  console.log(cont++, i);
}

console.log("\n\n");
