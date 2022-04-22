document.querySelector('button').onclick = myClick;
var ans = 0;

function myClick() {
let proton = document.querySelector('.proton').value;
let neitron = document.querySelector('.neitron').value;
let yadr = document.querySelector('.yadr').value;
let a = (proton * 1.00728) + (neitron * 1.00866);
let b = a - yadr;
let b2 = Math.round(d * 100000000) / 100000000;
let b1 = (`Δm = (${proton} * 1.00728) + (${neitron} * 1.00866) - ${yadr} = ${b2} а.е.м.`);
let c = b * 1.661;
let c2 = Math.round(d * 100000000) / 100000000;
let c1 = (`Переведем а.е.м в кг -> ${b2} * 1.661 * 10^-27 = ${c2} * 10^-27 кг`);
let d = c * 9;
let e = Math.round(d * 100000000) / 100000000;
let d1 = (`ΔE = ${c2} * 10^-27 * (10*3^8)^2 = ${c2} * 9 * 10^-11 = ${e} * 10^-11 Дж`);
let e1 = (`Ответ: ${e} х 10^-11(Дж)`);
document.querySelector('.out1').innerHTML = b1;
document.querySelector('.out2').innerHTML = c1;
document.querySelector('.out3').innerHTML = d1;
document.querySelector('.out4').innerHTML = e1;
}
