const min = 1;
const max = 50;

let random = Math.random() * (max - min) + min;
random = Math.floor(random);
console.log(random);
