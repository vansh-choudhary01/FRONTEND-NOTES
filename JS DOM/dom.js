let btn = document.querySelector("button");
let btns = document.querySelectorAll("button");

// btn.onclick = function () {
//     alert("button was clicked");
// }

function sayHello () {
    alert("Hellow");

}

function sayName () {
    alert("Now you are in Apna College website");
}

// ******************************Event Listener****************************
for(bt of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;  It is exicute only last function value it means now that is not work( btn.onclick = sayHello;) 
    // btn.onmouseenter = function () {
    //     console.log("hover is occour");
    // };
    // btn.addEventListener("click", function () {
    //     console.log("button was clicked!");
    // })
    // btn.addEventListener("click", function () {
    //     console.log("button click towards");
    // })
    bt.addEventListener("dblclick", function () {
        console.log("You double clicked me !");
    })
}

// **********************Event Listener of multiple elements**************************
let p = document.querySelector("p");
p.addEventListener("click", function() {
    console.log("para was clicked");
})

let div = document.querySelector("div");
div.addEventListener("mouseenter", function () {
    console.log("mouse is in the box");
})