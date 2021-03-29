//inital value
var count =0;

const value = document.querySelector(".value");

document.querySelector(".btn-wrapper").addEventListener('click',function(e){
 if(e.target.classList.contains("btn-increment")) count++;
 else if(e.target.classList.contains("btn-decrement")) count--;
 else if(e.target.classList.contains("btn-reset")) count =0;
 valueCheaker(count);
 value.innerText = count;
});

function valueCheaker(count){
    if(count>0) value.style.color = "green";
    else if(count<0) value.style.color = "red";
    else value.style.color = "black";
}