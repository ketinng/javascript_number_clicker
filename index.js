const decreaseBtn = document.getElementById("decreaseButton");
const resetBtn = document.getElementById("resetButton");
const increaseBtn = document.getElementById("increaseButton");
const label1 = document.getElementById('label1')
let count = 0;

increaseBtn.onclick = function(){
    count++
    label1.textContent = count;
}

decreaseBtn.onclick = function(){
    count--
    label1.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    label1.textContent = count;
}