//funções auto invocáveis

const user = 'Anderson';

const rand = (max = 99, min = 1) => {
  const rand = Math.random() * (max - min) + min;
  return Math.floor(rand);
};

((name, age) => {
  console.log(`My name is ${name}, and my age is ${age}`);
})(user, rand());

// OR

(function () {
  console.log('hello world');
})();
