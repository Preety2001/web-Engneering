const myp = document.getElementsByTagName("p");

myp[0].innerHTML="<h1> this is heading </h>"
console.log(myp.length);

const imp= document.querySelectorAll("  #DIV>p");
console.log(imp);

for (const iterator of imp) {
    iterator.onclick= function()
    {
        alert("hi this is Alert");
    }
    
}