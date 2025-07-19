// 3. Random Background Color of body (using for loop)
// Question:
// Write JavaScript code that changes the background color of the body  to random color when the button is clicked .
const random = document.getElementById("random");

let arr = ["red", "blue", "green", "black", "pink"];
random.addEventListener("click", () => {
  let a = Math.floor(Math.random() * arr.length);
  document.body.style.backgroundColor = arr[a];
});
