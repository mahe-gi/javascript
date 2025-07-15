const min = document.getElementById("min");
const sec = document.getElementById("sec");

let speed = 1000; // 1sec
let m = 5;
let s = 60;
let x;
function start() {
  clearInterval(x);
  x = setInterval(() => {
    s--;
    if (s == 0) {
      s = 60;
      m--;
    }
    min.textContent = m;
    sec.textContent = s;
  }, speed);
}

function stop() {
  clearInterval(x);
}
