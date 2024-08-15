let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = input.value;

    let del = document.createElement("button");
    del.innerText = "delete";
    del.classList.add("delete");

    item.appendChild(del);
    ul.appendChild(item);
    input.value = "";
});

// *******work on only existiong element**********

// let dels = document.querySelectorAll(".delete");
// for(del of dels) {
//     del.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove();
//     })
// }

ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})