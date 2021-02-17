const paragraph = document.querySelector(".home"); //seleciona a div home
const paragraphs = paragraph.querySelectorAll("p"); //essa é uma função NodeList, mas funciona parecido com um array

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");

const bodyStyle = getComputedStyle(document.body); //busca todo o codigo de estilo do body, que foi o parametro especificado
const backgroundColor = bodyStyle.backgroundColor;

console.log(backgroundColor);

const changeBackground = (bool) => {
  if (bool == true) {
    for (let p of paragraphs) {
      p.style.backgroundColor = backgroundColor;
      p.style.color = "white";
    }
  }
  if (bool == false) {
    for (let p of paragraphs) {
      p.style.backgroundColor = "white";
      p.style.color = "black";
    }
  }
  return;
};

btn1.addEventListener("click", () => {
  return changeBackground(true);
});
btn2.addEventListener("click", () => {
  return changeBackground(false);
});
