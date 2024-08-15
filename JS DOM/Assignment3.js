let input = document.querySelector("input");

input.addEventListener("mouseout", function() {
    console.log("mouseout event");
})

input.addEventListener("keypress", function() {
    console.log("keypress event");
})

input.addEventListener("keypress", function() {
    console.log("keypress event");
})

input.addEventListener("scroll", function() {
    console.log("scroll event");
})

window.addEventListener("load", function() {
    console.log("Page is fully loaded");
})

let btn = document.createElement("button");
btn.innerText = "click Me!";
document.querySelector("input").insertAdjacentElement("afterend", btn);

btn.addEventListener("click", function() {
    btn.style.backgroundColor = "green";
})

let nextInp = document.querySelectorAll("input")[1];

nextInp.addEventListener("input", function() {
    let last = this.value.length - 1;
    if((this.value[last] >= 'a' && this.value[last] <= 'z') || (this.value[last] >= 'A' && this.value[last] <= 'Z')) {
        nextInp.nextElementSibling.innerText = nextInp.nextElementSibling.innerText + this.value[last];
    }
})