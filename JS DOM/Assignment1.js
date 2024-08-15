let p = document.createElement("p");
p.innerText = "Hey I'm red!";
p.classList.add("red");
let body = document.querySelector("body");
body.append(p);

let h3 = document.createElement("h3");
h3.innerText = "I'm a blue h3!";
// h3.style.color = "blue";
h3.classList.add("blue");
body.append(h3);

let div = document.createElement("div");
// div.style.border.color = "black";
div.classList.add("pinkbg");
div.classList.add("border");
let divh1 = document.createElement("h1");
divh1.innerText = "I'm in a div";
let divp = document.createElement("p");
divp.innerText = "ME TOO!";

div.append(divh1);
div.append(divp);

body.append(div);