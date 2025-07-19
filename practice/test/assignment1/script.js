// 1. Toggle Visibility of an Element
// Question:
// Write a function in JavaScript that toggles the visibility of a paragraph with the ID myPara each time a button is clicked.

const myPara = document.getElementById("myPara");

const hide = document.getElementById("hide");

hide.addEventListener("click", () => {
  let a = myPara.classList.contains("hidden");
  if (!a) {
    console.log(a);
    a = !a;
    myPara.classList.add("hidden");
  } else {
    myPara.classList.add("none");
  }
});
