// document.body.innerHTML = "<h1>Hello</h1>"

var div1 = document.getElementById("div1");
div1.style.border = "1px solid black";
div1.style.width= "50%";
div1.style.backgroundColor = "green";
var p = document.querySelectorAll("div > p");

for (var i =0; i < p.length; i++){
   p[i].innerHTML = "<h1> new Text" + (i+1)+"</h1>"
}

var children = div1.children;


for (var i =0; i < p.length; i++){
    p[i].innerHTML = "<h1> new Element Inner" + (i+1)+"</h1>"
}

var p1 = document.createElement('p');
var p1Text = document.createTextNode('This text created with special method');
p1.appendChild(p1Text);
// div1.appendChild(p1);
// div1.insertBefore(p1,children[1]);
// div1.insertBefore(p1,div1.lastElementChild);
document.body.insertBefore(p1,div1.nextElementSibling);
var p2 = document.createElement("p") ;
var p2Text = document.createTextNode("this is p2 text");
p2.appendChild(p2Text);
var pFirst = document.getElementById('p1');
// div1.replaceChild(p2,p[0]);
div1.replaceChild(p2,children[0]);
div1.removeChild(p[1]);