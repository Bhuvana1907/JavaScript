console.log(document.body);
const bodyBackground=document.body;
bodyBackground.style.backgroundColor="green";

//1st APPROACH
var box4=document.getElementById('box-4');
console.log(box4);

//2ND APPROACH
var h1=document.getElementsByTagName('h1');
console.log(h1);

//3RD APPROACH
var boxes =document.getElementsByClassName('box');
console.log(boxes);

//Modifying elemnts
var box1=document.getElementById('box-1');
box1.innerHTML="<h2>kruthi</h2>"
box1.innerText="bhuvana kruthi"


document.getElementById('box-1').innerText="Bhuvana Kruthi";
document.getElementById('p').innerText="kruthi";
box1=document.getElementById('box-1');
box1.style.backgroundColor="yellow";

var box2=document.getElementById('box-2');
box2.classList.add('circle')

var  box3=document.getElementById('box-3');
box3.classList.remove('circle')
 boxes=document.getElementsByClassName('box');
for(let i=0;i<boxes.length;i++){
    boxes[i].classList.add('circle')
}
box3.classList.remove('box');
//1st is to get access
//2nd is the contents
//3rd is appending
var newPara=document.createElement('p');
newPara.innerText="This is our new paragraph";

 var cont=document.getElementById('cont');
 cont.appendChild(newPara);
 newPara.classList.add('box');
 newPara.classList.add('circle');
 
