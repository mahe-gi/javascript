// 2. Create and Append four List Item
// Question:
// Write a JavaScript function that, when called, creates a new <li> element with the text From User input and appends it to an existing <ul> with the ID myList.
const inp = document.getElementById("inp");
const add = document.getElementById("add");
const myList = document.getElementById("myList");
let val = "";
inp.addEventListener("change", (e) => {
  val = e.target.value;
});
const li = document.createElement("li");
add.addEventListener("click", () => {
  li.textContent = val;
  myList.appendChild(li);
});
