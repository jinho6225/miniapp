const clock = document.querySelector(".clock");

function getTime() {
  const cur = new Date();
  const hr = cur.getHours();
  const min = cur.getMinutes();
  const sec = cur.getSeconds();
  clock.innerHTML = `${hr < 10 ? `0${hr}` : hr}:${
    min < 10 ? `0${min}` : min
  }:${sec < 10 ? `0${sec}` : sec}`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
