// ************************This in Event Listener**********************************

let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let p = document.querySelector("p");
let btn = document.querySelector("button");

function changeColor() {
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
}

h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
btn.addEventListener("click", changeColor);

// *****************************Keyboard Events**************************************
btn.addEventListener("click" , function(event) {
    console.log(event);
})

btn.addEventListener("dblclick" , function(event) {
    console.log(event);
})

let input = document.querySelector("input");
input.setAttribute("placeholder", "username");

// input.addEventListener("keydown", function(event) {
//     console.log("key = " , event.key);
//     console.log("code = " , event.code);
//     console.log("key was tapp");
// });

// input.addEventListener("keyup", function() {
//     console.log("key was release");
// });

// input.addEventListener("keypress", function() {
//     console.log("key was pressed");
// });

input.addEventListener("keydown", function(event) {
    console.log("code = " , event.code); //ArrowUp(W), ArrowDown(S), ArrowLeft(A), ArrowRight(D)
    if(event.code == "ArrowUp" || event.code == "KeyW"){
        console.log("character moves forword");
    } else if(event.code == "ArrowDown" || event.code == "KeyS"){
        console.log("character moves backword");
    } else if(event.code == "ArrowLeft" || event.code == "KeyA"){
        console.log("character moves left");
    } else if(event.code == "ArrowRight" || event.code == "KeyD"){
        console.log("character moves right");
    }
})

// ************************EventListener on form*********************
let form = document.querySelector("form");
let namee = document.querySelectorAll("input")[1];
let pass = namee.nextElementSibling;

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("form submited");
    // console.log(namee.innerText);
    // console.dir(namee);
    console.log(`name = ${namee.value}`);
    console.log(`pass = ${pass.value}`);
    alert(`Hi ${namee.value}, your password is set to ${pass.value}`);

    console.dir(form.elements);
    console.dir(this.elements); //both is same (form.elements)
})

namee.addEventListener("change", function() {
    console.log("change event");
    console.log("changed value = ", this.value);
})

namee.addEventListener("input", function() {
    console.log("input event");
    console.log("changed value = ", this.value); //not character key is not triger the input event like shift, ctrl etc...
})

let newinp = form.nextElementSibling.children[2];
let newp = newinp.previousElementSibling;
newinp.addEventListener("input", function() {
    newp.innerText = this.value;
})

// ******************************Event Bubbling*******************************
let div = document.querySelector(".eventBubbling");
let ul = document.querySelector(".eventBubbling ul");
let lis = document.querySelectorAll(".eventBubbling ul li");

div.addEventListener("click", function() {
    console.log("div is clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul is clicked");
});

for(li of lis) {
    li.addEventListener("click", function(event) {
        event.stopPropagation();
        console.log("li is clicked");
    });
};