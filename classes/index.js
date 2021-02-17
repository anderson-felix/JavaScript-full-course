const id = Symbol('cpf');

class Author {
  constructor(name, lastName, cpf) {
    this.name = name;
    this.lastName = lastName;
    this[id] = cpf;
    this.token = 'a1b2c3d4';
  }
  hello() {
    return console.log(`Hello world! My name is ${this.name} ${this.lastName}`);
  }

  get getCpf() {
    return this[id];
  }

  static token() {
    return `Token : ${a1.token}`;
  }
}
const a1 = new Author('Anderson', 'Felix', '438.870.418-01');

class Book extends Author {
  constructor(title, price) {
    super(a1.name, a1.lastName, a1[id]);
    this.title = title;
    this.price = price;
  }

  set setPrice(price) {
    this.price = price;
  }
}

const l1 = new Book('Perifericode', 31.9);

console.log(l1.name);
console.log(l1.lastName);
console.log(l1.title);
console.log(l1.price);

l1.setPrice = 1;

console.log(l1.price);
console.log(l1.getCpf);

console.log(Author.token());
