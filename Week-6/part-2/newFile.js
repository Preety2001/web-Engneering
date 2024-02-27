const myp1 =document.getElementById("p1");
//alert(myp1.innerText);
myp1.style.color="red";
myp1.innerText="i am over the Moon";


const myb1= document.getElementById("button");

myb1.innerText="click me ";

function sayhi()
{
    //alert("hi i m here..!");
const ball=document.createElement("div");
ball.className = "ball"
const cont =document.getElementById("container");
cont.appendChild(ball);



}
//sayhi();
myb1.onclick=sayhi;

ball=document.createElement("div");
const ball = document.createElement('div');
ball.classList.add('ball');
