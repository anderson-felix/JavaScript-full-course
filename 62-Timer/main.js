const clock = document.querySelector(".clock");
const play = document.querySelector("#play-btn");
const pause = document.querySelector("#pause-btn");
const stop = document.querySelector("#stop-btn");

let seconds = 0;
let timer;

const setHour = (time) => {
  const date = new Date(time * 1000);
  return date.toLocaleTimeString("pt-BR", { hour12: false, timeZone: "UTC" });
};

const getHour = () => {
  timer = setInterval(() => {
    seconds++;
    clock.innerHTML = setHour(seconds);
  }, 1000);
};

play.addEventListener("click", (event) => {
  clearInterval(timer);
  clock.classList.remove("pause");
  clock.classList.add("play");
  getHour();
});
pause.addEventListener("click", (event) => {
  clearInterval(timer);
  clock.classList.remove("play");
  clock.classList.add("pause");
});
stop.addEventListener("click", (event) => {
  clearInterval(timer);
  clock.classList.remove("play");
  clock.classList.remove("pause");
  clock.innerHTML = "00:00:00";
  seconds = 0;
});
