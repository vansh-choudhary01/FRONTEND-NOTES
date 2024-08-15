let input = document.createElement("input");
let button = document.createElement("button");
button.innerText = "Click Me!";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

document.querySelector("#btn").classList.add("blueBc");
document.querySelector("#btn").classList.add("white");

let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOMPractice</u>";
h1.classList.add("purple");
document.querySelector("body").append(h1);

let p = document.createElement("p");
p.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);