const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const num = document.querySelector(".number");
let count = 0;
plus.addEventListener('click',()=>{
    count++;
    num.textContent = count});
minus.addEventListener('click',()=>{
    count--;
    num.textContent = count});