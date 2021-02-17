const setPerson = (fullName, height, weight) => {
  const getFirstName = fullName.split(' '); //criando um array com cada palavra separada por espaço sendo um item
  return {
    nome_completo: fullName,
    primeiro_nome: getFirstName.shift(),
    altura: height,
    peso: weight,
    imc() {
      const imc = this.peso / this.altura ** 2;
      return `Meu IMC é : ${imc.toFixed(2)}`;
    },
    getPerson() {
      return `Meu nome é ${this.primeiro_nome}, tenho ${this.altura} de altura e peso ${this.peso} kilos`;
    },
  };
};

const p1 = setPerson('anderson felix moraes de souza', 1.8, 74);

console.log(p1.getPerson());
console.log(p1.imc());
