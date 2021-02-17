// o método arguments só existe se a função for criada usando function

function sum() {
  let total = 0;
  for (let i in arguments) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(5, 5));
