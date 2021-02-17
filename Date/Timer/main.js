const getHour = () => {
  var date = new Date();

  return date.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
};

const timer = setInterval(() => {
  console.log(getHour());
}, 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log("Já foram 5");
}, 5000);
