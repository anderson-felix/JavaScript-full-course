const CpfValidator = cpfRaw => {
  const verify = cpfRaw.replace(/\D+/g, '').split('');
  if (verify.length !== 11) {
    return console.log('CPF INVÁLIDO');
  }

  let cpf = cpfConverter(cpfRaw);

  const getDigit = getSum(cpfRaw);
  let digit = 11 - (getDigit % 11);
  digit = digit > 9 ? 0 : digit;
  cpf.push(digit);

  const getDigit2 = getSum(cpf);
  let digit2 = 11 - (getDigit2 % 11);
  digit2 = digit2 > 9 ? 0 : digit2;
  cpf.push(digit2);

  for (let i in cpf) {
    cpf[i] = String(cpf[i]);
  }

  cpf.join('') === verify.join('')
    ? console.log('CPF válido e confirmado')
    : console.log('CPF inválido e não confirmado');
};

const getSum = (cpfRaw, result = []) => {
  if (cpfRaw.length === 10) {
    let cont = cpfRaw.length + 1;
    for (let v of cpfRaw) {
      let res = v * cont;
      result.push(res);
      cont--;
    }

    return result.reduce((acc, value) => (acc += value));
  }

  let cpf = cpfConverter(cpfRaw);

  let cont = cpf.length + 1;
  for (let v of cpf) {
    let res = v * cont;
    result.push(res);
    cont--;
  }

  return result.reduce((acc, value) => (acc += value));
};

const cpfConverter = cpfRaw => {
  let cpf = cpfRaw.replace(/\D+/g, '').split('').slice(0, 9);
  for (let i in cpf) {
    cpf[i] = Number(cpf[i]);
  }

  return cpf;
};

// const cpf = '705.484.450.52'; //aleatório
// const cpf = '438.870.418-01'; //anderson
const cpf = '443.409.198-02'; //nubia

CpfValidator(cpf);
