// Os prototypes são os protótipos usados para criar um objeto, eles são instanciados automaticamente quando
//   um objeto for criado, podendo ser um atributo, método ou função.
// Melhora o desempenho pois é um objeto pai ao objeto criado, que partilha com a classe filha todos seus
//   métodos, assim cada instância usa os mesmos métodos do objeto pai, sem precisar de um método pra cada instância

// Posso definir um prototype usando o Objeto.prototype ou como __proto__

// O método Objeto.setPrototypeOf(filha, pai) define que o objeto passado no primeiro parâmetro vai herdar do objeto
//   pai, que é o segundo parâmetro passado.

// O método Objeto.create(pai, {new})  define que o objeto passado no primeiro parâmetro sendo o objeto que vai receber os
//   atributos, métodos ou funções do segundo parâmetro.

function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.__proto__.present = `My name is ${this.name} ${this.lastName}`;
}

const user = () => {
  return {
    date: new Date(),
    id: Date.now(),
  };
};

Person.prototype.startLetter = name => {
  const nameSplit = name.split('');
  const firstLetter = nameSplit[0];
  return `A first letter of your name is ${firstLetter}`;
};

const person = new Person('Anderson', 'Felix');

const newUser = user();
Object.setPrototypeOf(newUser, person); //Agora newUser herda de person

console.log(`1 - ${newUser.present}`);
console.log(`2 - ${newUser.startLetter(newUser.name)}\n`);
console.log(`3 - id : ${newUser.id}  |  date : ${newUser.date}`);

Object.assign(newUser, {
  gameOn: 'Assasins creed',
  priceGame: 134.54,
});

console.log(`5 - The game ${newUser.gameOn} cost : ${newUser.priceGame}`);
