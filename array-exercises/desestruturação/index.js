const num = [100, 200, 300, 400, 500, 600, 700, 800, 900];

const [um, dois, tres] = num;
const [, , , quatro, cinco, seis] = num;
const [, , , , , ...rest] = num;

console.log(um, "\n", quatro, "\n", rest);
