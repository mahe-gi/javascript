const un = document.getElementById("un");
const addBtn = document.getElementById("add");
const removeBtn = document.getElementById("remove");
const img = document.getElementById("image");
const imgBtn = document.getElementById("imageshow");
const tog = document.getElementById("tog");
const togBtn = document.getElementById("togBtn");

addBtn.addEventListener("click",()=>{
    const el =document.createElement('li');
    el.textContent="hello";
    un.appendChild(el);
})

removeBtn.addEventListener("click",()=>{
let fel =un.firstElementChild
un.removeChild(fel);

})

window.addEventListener("DOMContentLoaded",()=>{
    img.setAttribute('alt','askfjbdsf');
})
imgBtn.addEventListener('click',()=>{
    let a = img.getAttribute('alt');
    console.log(a);
})

togBtn.addEventListener('click',()=>{
    tog.classList.toggle('highlight');
})

const setBtn = document.getElementById("setBtn");
const setImg = document.getElementById("setImg");

setBtn.addEventListener('click',()=>{
    setImg.setAttribute('src','https://plus.unsplash.com/premium_photo-1751516658465-afa8ea548f63?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');

})

const inp = document.getElementById("inp");
const submit = document.getElementById("submit");

submit.addEventListener("click",(e)=>{
    console.log(inp.value);

})
