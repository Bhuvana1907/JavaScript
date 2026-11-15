//Events

//1. Event Handlers
//(on click, onload, onmouseover,onmouseout,onkeypress,onkeydown)
function onClickFunc(){
    console.log("The box has been clicked");
}
//similarly we can check for remaining methods too
var keyPressEvent=()=>{
    console.log("The key has been hitted")
}
//similarly onkeyup and onkeydown
 
//2.Event Listeners
const box1=document.getElementById('box-1');
box1.addEventListener('click',()=>{
    console.log("Click has been triggered-1",event.clientX,event.clientY);
})
box1.addEventListener('click',()=>{
    console.log("click has been triggered - 2");
})
function firstFuncCall(){
    console.log("func 1");
}
function secFuncCall(){
    console.log("func 2");
}
