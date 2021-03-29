document.getElementById("btn-increment").addEventListener('click',increment);
document.getElementById("btn-decrement").addEventListener('click',decrement);
document.getElementById("btn-reset").addEventListener('click',reset);

function increment(e){
    const counterValue = parseInt(document.querySelector(".value").innerText) + 1;
    valueCheaker(counterValue);
    document.querySelector(".value").innerText = counterValue;
}

function decrement(e){
    const counterValue = parseInt(document.querySelector(".value").innerText) -1;
    valueCheaker(counterValue);
    document.querySelector(".value").innerText = counterValue;
}

function reset(e){
    const counterValue = document.querySelector(".value");
    counterValue.style.color = "black";
    document.querySelector(".value").innerText = 0;
}

function valueCheaker(value){
    if(value<0) document.querySelector(".value").style.color = "red";
    else if(value>0) document.querySelector(".value").style.color = "green";
    else document.querySelector(".value").style.color = "black";
}