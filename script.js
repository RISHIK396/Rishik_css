// console.dir(window.document);
console.dir(document.body.childNodes[1]);
console.log(document.body);

console.dir(document.head);

// will change the background color of the body or browser to green
document.body.style.background="green";

// will change the color of the text to white 
document.body.childNodes[1].style.color="white";

// will change the text to hello world in the h1 tag
document.body.childNodes[1].innerText="HELLO WORLD";

let heading3=document.getElementsByTagName("h3");

console.dir(heading3);

let q1=document.querySelector("p");
console.dir(q1);

let q2= document.querySelectorAll("P");
console.dir(q2)
