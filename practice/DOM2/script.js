// this will select html element and stores in root variable which element has root id
const root = document.getElementById("root");

// console.log(root);

// here we are creating a h1 element without any data inside element
const head = document.createElement("h1");

// console.log(head);
// here we are adding text content or data to element head h1 but not added to dom
head.textContent = "hello i am h1";

// here we are adding or rendering to dom inside root element or appending to root div
root.appendChild(head);

//
let a = root.firstElementChild;
// it removes the child element from the dom
root.removeChild(a);

//
