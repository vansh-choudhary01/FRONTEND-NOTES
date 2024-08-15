let fav = "Animal";
let guess = prompt("Enter and try to find my fav movie ! : ");
while(fav != guess) {
    guess = prompt("Enter and try to find my fav movie ! : ");
    if (guess === "quit") {
        console.log(`you failed my fav movie is ${fav}`);
        break;
    }
}

if(guess == fav) {
    console.log(`you got this Congrats`);
}

let fruits = ["mango", "apple", "banana", "litchi", "orange"];

for(fruit of fruits){
    console.log(fruit);
}

for(char of "apnaCollege") {
    console.log(char);
}
console.log("\n");
for(let char of "bhai") {
    console.log(char);
}

let heroes = [ ["ironman", "spiderman", "thor"] , ["superman", "wonder woman", "flash"] ];

for(list of heroes) {
    console.log("*************list*****************");
    for(hero of list) {
        console.log(hero);
    }
}

// ****************************************************Todo list******************************************************************

let req = prompt("enter your task which one you choose : ");
let todo = [];

while(true) {
    
    if(req == "quit"){
        console.log("quiting app");
        break;
    } else if (req == "list"){
        console.log("**********************");
        for(let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("**********************");
    } else if (req == "add"){
        req = prompt("enter your task what you want to add : ");
        todo.push(req);
        console.log("task added");
    } else if (req == "delete"){
        let idx = prompt("plz enter the task idx : ");
        todo.splice(idx, 1);
        console.log("task deleted");
    } else {
        console.log("wrong request");
    }

    req = prompt("enter your task which one you choose : ");
}