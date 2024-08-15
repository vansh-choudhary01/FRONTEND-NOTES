function hello() {
    console.log("hellow");
}
// hello();

function myName() {
    console.log("Apna College");
    console.log("Shradha Khapra");
}
// myName();

function isAdult(age) {
    // let age = 18;
    if(age >= 18){
        console.log("Adult");
    } else {
        console.log("Not Adult");
    }
}
// isAdult(19);

function poem(){
    console.log("In a meadow kissed by light,\nWhere dawn embraces softest night,\nBlossoms dance in pastel hues,\nWhispering secrets through the dews.\nButterflies on silent wings,\nJoin the song the brooklet sings,\nIn this place where dreams are spun,\nHearts find peace beneath the sun.")
}
// poem();

function dice(){
    return Math.floor(Math.random()*6) + 1;
}
// console.log(dice());

function printInfo(name,age){
    console.log(`${name}'s age ${age}`);
}
// printInfo("vansh", 18);
// printInfo("rajat", 19);
// printInfo("karan");
// printInfo("raj",18,78);

function outerfun() {
    let a = 10;
    let b = 20;
    function innerfun() {
        console.log("inner function");
    }
    innerfun();
}
// outerfun();
// innerfun(); can't work


// *****************************************Function Expression*************************************************

const sum = function(a,b) {
    return a + b;
}
// sum(2,3);

let hi = function() {
    console.log("Hi!");
}

hi = function() {
    console.log("Namaste!");
}

// *****************************************Higer Order Function*********************************************

function multipleGreet(func, n){
    for(let i = 1; i <= n; i++){
        func();
    }
}

let greet = function(){
    console.log("Hello!");
}

multipleGreet(greet, 5);
multipleGreet(function(){console.log("namaste");}, 2);



function oddEvenTest(request) {
    if(request == "odd"){
        return function(n) {
            console.log(!(n%2 == 0));
        }

    } else if (request == "even"){
        return function(n) {
            console.log(n%2 == 0);
        }

    } else {
        console.log("wrong request");
    }
}

// **************************************************Methods***********************************************

// const calculater = {
//     num : 55,
//     sum : function(a,b) {
//         return a + b;
//     },
//     sub : function(a,b) {
//         return a - b;
//     },
//     mul : function(a,b) {
//         return a * b;
//     }
// }

// ***********Sort form***************
const calculater = {
    sum(a, b) {
        return a + b;
    },
    sub(a,b) {
        return a - b;
    }
}

// calculater.sum(4,5);
// calculater.sub(4,5);
// calculater.mul(4,5);

// *******************default Parameter************************
function sum1(a, b = 3){
    return a + b;
}

console.log(sum1(1,4));
console.log(sum1(2));

function sum2(a = 2, b){ // wrong way     (function sum2(b, a = 2) //this is right way)
    return a + b;
}

console.log(sum2(1,4)); //a = 1, b = 4
console.log(sum2(1)); //a = 1, b = undefined

