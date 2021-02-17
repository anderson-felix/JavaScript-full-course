function Product(name, value, stock) {
  this.name = name;
  this.value = value;
  this.stock = stock;

  Object.freeze(this); // bloqueio a alteração de valor de todos items do objeto
  Object.freeze(this.name); // bloqueio a alteração de valor do item especificado no parametro
}

function Produto(nome, valor, estoque) {
  // Object.defineProperty(atributo, nome, {configs})
  Object.defineProperty(this, 'nome', {
    enumerable: true, // visibilidade da chave criada
    value: nome, // define o valor da chave
    writable: false, // habilita a alteração do valor da chave
    configurable: false, // habilita apagar ou reconfigurar a chave
  });
  Object.defineProperty(this, 'valor', {
    enumerable: true, // visibilidade da chave criada
    value: valor, // define o valor da chave
    writable: true, // visibhabilita a alteração do valor da chave
    configurable: false, // habilita apagar ou reconfigurar a chave
  });
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // visibilidade da chave criada
    value: estoque, // define o valor da chave
    writable: true, // habilita a alteração do valor da chave
    configurable: true, // habilita apagar ou reconfigurar a chave
  });
}

function Produtos(nome, valor, estoque) {
  // Object.defineProperties(atributo, {configs})
  Object.defineProperties(this, {
    nome: {
      enumerable: true, // visibilidade da chave criada
      value: nome, // define o valor da chave
      writable: false, // habilita a alteração do valor da chave
      configurable: false, // habilita apagar ou reconfigurar a chave}
    },
    valor: {
      enumerable: true, // visibilidade da chave criada
      value: valor, // define o valor da chave
      writable: true, // habilita a alteração do valor da chave
      configurable: false, // habilita apagar ou reconfigurar a chave}
    },
    estoque: {
      enumerable: true, // visibilidade da chave criada
      value: estoque, // define o valor da chave
      writable: true, // habilita a alteração do valor da chave
      configurable: true, // habilita apagar ou reconfigurar a chave}
    },
  });
}

const p1 = new Product('Tenis', 180, 10);
const p2 = new Produto('Bolsa', 120, 15);
const p3 = new Produtos('Boné', 90, 23);

console.log(p1);
console.log(p2);
console.log(p3);
