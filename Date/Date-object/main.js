const webDate = document.querySelector(".data h1");
const date = new Date();

const newDate = date.toLocaleDateString("pt-BR", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
});

webDate.innerHTML = newDate;
