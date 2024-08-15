// ***********************************************This keyword**************************************
const student = {
    name : "shradha",
    age : 23,
    eng : 95,
    math : 93, 
    phy : 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

function getThis() {
    console.log(this);
}

console.log(window);

// ************************************************try catch*****************************************

// let a = 5;
console.log("hello");
console.log("hello");
try {
    console.log(a);
} catch(err) {
    console.log("caught an error");
    console.log(err);
}
console.log("hello2");
console.log("hello2");
console.log("hello2");

// **********************************************Arrow Function*************************************

// const sum = (a,b) => console.log(a + b);
// const sum = (a,b) => {console.log(a + b)}
const sum = (a,b) => {
    console.log(a + b)
}

// const cube = (n) => {
//     return n * n * n;
// }
const cube = n => {
    return n * n * n;
}

const pow = (a, b) => {
    return a ** b;
}

// const mul = (a,b) => {
//     return a * b;
// }
// const mul = (a,b) => (
//     a * b //It's return automatic when a single operation is performe in arrow function
// );
const mul = (a,b) => a * b;

// ****************************************Set Timeout Function*********************************

// setTimeout(function, timeout); // sintax
// console.log("Hi there !");

setTimeout(() => {
    console.log("Apna College");
}, 4000); /*After 4000 ms*/
    
// console.log("Welcome to");
    
    
// setInterval(function, timeout); // sintax // its performe siviral times (after 2s exicute ,2s exicute, 2s exicute)
// let id = setInterval(() => {
//     console.log("Apna College2");
// }, 2000); /*After 2000 ms (again and again and again)*/


// let id2 = setInterval(() => {
//     console.log("Apna College3");
// }, 3000); /*After 3000 ms (again and again and again)*/

// console.log(id);
// // clearInterval(id);



// *****************************************This with Arrow Function*********************************
const info = {
    name : "vansh",
    age : 19,
    prop : this, // global scope
    getName() {
        name = "shradha";
        console.log(this); // lactial scope(its parent value's)
        console.log(this.name);
        let arrow = () => {
            console.log(this); // parent scope(lactial scope)
            console.log(this.name);
        }
        function helper() {
            console.log(this); // lactial scope 
            console.log(this.name);
        }
        arrow();
        helper();
    },
}

const stu = {
    name : "aman",
    marks : 95,
    prop : this, //global scope
    getName : function() {
        console.log(this); //lactical scope
        return this.name;
    },
    getMarks : () => {
        console.log(this); //parent's scope -> window
        return this.name;
    },
    getInfo1 : function() {
        setTimeout(() => {
            console.log(this); //student because setTimeout is call him not it's parent so getInfo1 is her perent and his this is student
        }, 2000);
    },
    getInfo2 : function() {
        setTimeout(function () {
            console.log(this); //window because setTimeout this is window object 
        }, 2000);
    }
}