const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".number")
plus.addEventListener('click',()=>{num.textContent++});
minus.addEventListener('click',()=>{num.textContent--});