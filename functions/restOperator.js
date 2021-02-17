const calcutator = (operator, ...values) => {
  result = 0;
  if (operator === '+') {
    for (let value of values) {
      result += value;
    }
  }
  if (operator === '-') {
    result = values[0];
    for (let value of values) {
      result -= value;
    }
  }
  if (operator === '*') {
    for (let value of values) {
      result *= value;
    }
  }
  if (operator === '/') {
    for (let value of values) {
      result /= value;
    }
  }
  return console.log(result);
};

calcutator('-', 5, 5);
