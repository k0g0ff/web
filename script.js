document.querySelector('button').onclick = myClick;
var ans = 0;

function myClick() {
let proton = document.querySelector('.proton').value;
let neitron = document.querySelector('.neitron').value;
let yadr = document.querySelector('.yadr').value;
let a = (proton * 1.00728) + (neitron * 1.00866);
let b = a - yadr;
let c = b * 1.661;
let d = c * 9;
let e = Math.round(d * 100000000) / 100000000;
alert("Ответ: " + e + " х 10^-11(Дж)");
}
