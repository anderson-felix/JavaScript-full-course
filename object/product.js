function Product(title, price, qnt, description) {
  this.title = title;
  this.price = price;
  this.qnt = qnt;
  this.description = description;
}

Product.prototype.desconto = function (percentual) {
  this.price -= this.price * (percentual / 100);
};

function Computer(title, price, qnt, description, model) {
  Product.call(this, title, price, qnt, description); //o call faz o objeto atual herdar os atributos do objeto chamado
  this.model = model;
}
//OBRIGATÒRIO QUANDO USO O CALL PARA FAZER HERANÇA DE PROTOTYPE :
Computer.prototype = Object.create(Product.prototype); //aqui eu estancio os métodos do Product.prototype para o Computer.prototype
Computer.prototype.constructor = Computer; //aqui eu defino o construtor original de Computer como ele mesmo, já que por herdar de Product teria o mesmo contrutor que Product
//

const product = new Product('Celular', 1.999, 12, 'Xiaomi mi note 9 pro');

const computer = new Computer('Acer', 4.999, 8, 'Acer aspire i5', 'Notebook');

product.desconto(50);
computer.desconto(50);

console.log(computer);
