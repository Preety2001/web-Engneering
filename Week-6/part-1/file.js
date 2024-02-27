const myp1 =document.getElementById("p1");
//alert(myp1.innerText);
myp1.style.color="red";
myp1.innerText="i am over the Moon";


const myb1= document.getElementById("button");

myb1.innerText="click me ";

function sayhi()
{
    alert("hi i m here..!");


}
//sayhi();
myb1.onclick=sayhi;
