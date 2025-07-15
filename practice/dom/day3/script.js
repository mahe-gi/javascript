const keys = document.getElementById("keys");
const count = document.getElementById("count");
let c = 0;
document.addEventListener("keydown", (e) => {
  let span = document.createElement("span");
  span.textContent = e.key;
  keys.appendChild(span);
  c++;
  count.textContent = c;
});

const word = document.getElementById("word");
const upperInp = document.getElementById("upper");
let userinp = "";
let upper = "";
word.addEventListener("input", (e) => {
  userinp = e.target.value;
  upper = userinp.toUpperCase();
  console.log(upper);
  upperInp.value = upper;
});

const txtarea = document.getElementById("txtarea");
const display = document.getElementById("display");
let str = "";
txtarea.addEventListener("input", (e) => {
  display.textContent = e.target.value;
});
