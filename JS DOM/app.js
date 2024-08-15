// let smallImages = document.getElementsByClassName("oldImg");

// for(let i = 0; i < smallImages.length; i++){
//     smallImages[i].src = "assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }

// ********************Select single element*********************
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("#description"));
// document.querySelector(".oldImg").src = "assets/spiderman_img.png";
console.dir(document.querySelector("div a"));   //inner element

// ********************Select Multiple element*********************
console.dir(document.querySelectorAll("p"));

let para = document.querySelector("p");

// para.innerText = "Hi, I am <b>Peter Parker</b>!";
para.innerHTML = "Hi, I am <b>Peter Parker</b>";

let heading = document.querySelector("h1");
console.log(heading.innerText);
// heading.innerHTML = `<u>${heading.innerText}</u>`;

// let img = document.querySelector("img");
// console.log(img.getAttribute("id"));
// img.setAttribute("id", "spidermanImg");
// img.setAttribute("src", "assets/creation_3.jpeg");
// console.log(img.classList);

let links = document.querySelectorAll(".box a");

// for(let i = 0; i < links.length; i++){
//     links[i].style.color = "green";
// }

for(link of links){
    link.style.color = "yellow";
}

let box = document.querySelector(".box");
// box.style.backgroundColor = "red";

// heading.classList.add("green");
// heading.classList.add("underline");
// heading.classList.remove("green");
// heading.setAttribute("class", "green");
console.log(heading.classList.contains("green"));
heading.classList.toggle("green"); //on
heading.classList.toggle("green"); //off

box.classList.add("yellowbg");

let h4 = document.querySelector("h4");
console.log(h4.parentElement);
console.log(h4.children)

let ul = document.querySelector("ul");
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);

console.log(document.querySelector("h1").nextElementSibling);
document.querySelector("img").previousElementSibling.style.color = "green";

// *************************create new Element*********************|
let newp = document.createElement("p");
newp.innerText = "Hi, I am a new p";
newp.append("this is new text");
let btn = document.createElement("button");
btn.innerText = "click me!";

let body = document.querySelector("body");
body.appendChild(newp);

box.appendChild(newp);
box.appendChild(btn);
newp.append(btn);
newp.append(" do not click this button");
newp.prepend("this is created using prepend function");

let p = document.querySelector("p");
p.insertAdjacentElement("beforebegin", btn);
// p.insertAdjacentElement("afterbegin", btn);
// p.insertAdjacentElement("beforeend", btn);
// p.insertAdjacentElement("afterend", btn);

// *************************Remove Element*********************|
// body.removeChild(btn);
btn.remove();
p.remove();