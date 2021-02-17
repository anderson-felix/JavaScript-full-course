function Account(account, bank, balance) {
  this.account = account;
  this.bank = bank;
  this.balance = balance;
}

Account.prototype.withDraw = function (value) {
  if (this.balance - value < 0) return console.log('Saldo insuficiente');
  this.balance -= value;
  return this.balanceExtract();
};

Account.prototype.deposit = function (value) {
  this.balance += value;
  return this.balanceExtract();
};

Account.prototype.balanceExtract = function () {
  return console.log(
    `Conta : ${this.account} | Banco : ${
      this.bank
    } | Saldo : R$ ${this.balance.toFixed(2)}`,
  );
};

function AccountCC(account, bank, balance, limit) {
  Account.call(this, account, bank, balance);
  this.limit = limit;
}
AccountCC.prototype = Object.create(Account.prototype);
AccountCC.prototype.constructor = AccountCC;
AccountCC.prototype.withDraw = function (value) {
  if (this.balance - value < -this.limit) {
    return console.log('Saldo insuficiente');
  }
  this.balance -= value;
  return this.balanceExtract();
};

function AccountCP(account, bank, balance) {
  Account.call(this, account, bank, balance);
}
AccountCP.prototype = Object.create(Account.prototype);
AccountCP.prototype.constructor = AccountCP;

const contaCc = new AccountCC(77, 11, 150, 100);
const contaCp = new AccountCP(16, 11, 150);

console.log('\n');

contaCc.deposit(100);
contaCc.deposit(100);
contaCc.deposit(100);
contaCc.withDraw(160);
contaCc.withDraw(290);
contaCc.withDraw(100);
contaCc.withDraw(1);

console.log('\n');

contaCp.withDraw(100);
contaCp.withDraw(100);

console.log('\n');
