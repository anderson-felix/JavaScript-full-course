const home = document.querySelector(".home");

const setElement = (element, className, text) => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.innerHTML = text;
  home.appendChild(newElement);
  return;
};

setElement("p", "p-class", "Frase 1");
setElement("div", "div-class", "Frase 2");
setElement("footer", "footer-class", "Frase 3");
setElement("section", "section-class", "Frase 4");
