// O FOR IN RETORNA UM INDICE PARA FAZER ITERAÇÕES, FUNCIONA COM OBJETOS, ARRAY OU STRING

const frutas = ["macã", "pêra", "banana", "melancia", "uva"];

const nome = "anderson felix";

const pessoas = {
  nome: "anderson",
  idade: 23,
  sexo: "M",
};

console.log("\n\n");

for (let i in nome) {
  console.log(i, nome[i]);
}

console.log("\n\n");

for (let i in frutas) {
  console.log(i, frutas[i]);
}

console.log("\n\n");

for (let key in pessoas) {
  console.log(key, pessoas[key]);
}

console.log("\n\n");
