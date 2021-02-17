// O FOREACH É UMA FUNÇÃO, QUE RECEBE OUTRA FUNÇÃO COM PARAMETROS PARA FAZER A ITERAÇÃO
// OS PARAMETROS DO FOREACH SÃO (VALOR, INDICE, VETOR)

const frutas = ["macã", "pêra", "banana", "melancia", "uva"];

const pessoas = {
  nome: "anderson",
  idade: 23,
  sexo: "M",
};

console.log("\n\n");

frutas.forEach((valor, indice, array) => {
  console.log(valor);
});

console.log("\n\n");

frutas.forEach((valor, indice, array) => {
  console.log(indice);
});

console.log("\n\n");

frutas.forEach((valor, indice, array) => {
  console.log(array);
});

console.log("\n\n");
