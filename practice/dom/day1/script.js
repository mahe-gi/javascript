const a = document.getElementById("hello");

a.textContent = "Welcome to our website!";

const btn = document.getElementById("one");
function change() {
  btn.textContent = "clicked";
  document.body.style.background = "#f393f3";
}

const img = document.getElementById("image1");
img.style.height = "200px";
const imgbtn = document.getElementById("imgbtn");

imgbtn.addEventListener("click", () => {
  const isHidden = img.style.visibility === "hidden";
  img.style.visibility = isHidden ? "visible" : "hidden";
  imgbtn.textContent = isHidden ? "visible" : "hidden";
});
