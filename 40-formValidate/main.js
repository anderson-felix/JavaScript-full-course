// capturar evento de submit do formulário
const getForm = document.querySelector(".form");

getForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputPeso = event.target.querySelector("#peso"); //inputPeso vai receber um valor quando clicar no input #peso
  const inputAltura = event.target.querySelector("#altura"); //inputAltura vai receber um valor quando clicar no input #altura

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) return setResult("Peso invalido", false);
  if (!altura) return setResult("Altura invalida", false);

  const imc = getImc(peso, altura);

  const result = getImcValue(imc);

  console.log(imc, result);

  setResult(`${imc} - ${result}`, true);
});

const getImc = (peso, altura) => {
  const imc = peso / altura ** 2; //peso dividido pela altura elevado a 2
  return imc.toFixed(2);
};

const getImcValue = (imc) => {
  const result = [
    "Abaixo do peso",
    "Peso normal",
    "SobrePeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc >= 39.9) return result[5];
  if (imc >= 34.9) return result[4];
  if (imc >= 29.9) return result[3];
  if (imc >= 24.9) return result[2];
  if (imc >= 18.5) return result[1];
  if (imc >= 18.5) return result[0];
};

const setP = () => {
  return document.createElement("p");
};

const setResult = (result, isValid) => {
  const res = document.querySelector(".result");
  res.innerHTML = "";

  const p = setP(); //cria um elemento de parágrafo

  if (isValid) {
    p.classList.add("p-true-result"); //adiciona uma classe chamada p-result ao elemento criado
  } else {
    p.classList.add("p-false-result");
  }

  p.innerHTML = result;

  res.appendChild(p);
};
