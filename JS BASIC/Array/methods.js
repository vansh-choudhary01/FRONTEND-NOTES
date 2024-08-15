let arr = [1,2,3,4,5,6];

function printArr(n){
    console.log(n);
}

// arr.forEach(printArr);

// arr.forEach(function (n)  {
//     console.log(n);
// })

// arr.forEach( (n) => console.log(n));

// **************************Use in Array of object's(  arr.forEach()  ) ****************************

let array = [{
    name : "aman",
    marks : 89
}, {
    name : "vansh",
    marks : 94
}, {
    name : "shradha",
    marks : 95
}];

array.forEach((student) => console.log(student.marks));
console.log('\n');
// **************************arr.map()****************************
let cgpa = array.map((n) => n.marks / 10);
cgpa.forEach((n) => console.log(n));

console.log('\n');

let double = arr.map((n) => {return n * 2;});
double.forEach((n) => console.log(n));

console.log('\n');
// **************************arr.filter()****************************
let even = arr.filter((n) => (n % 2 == 0));
even.forEach((n) => console.log(n));

console.log('\n');

// **************************arr.every()****************************
let everyEven = arr.every((n) => (n % 2 == 0));
console.log(everyEven);
everyEven = [2,4,6].every((n) => (n % 2 == 0));
console.log(everyEven);

console.log('\n');

// **************************arr.some()****************************
let anyOneEven = arr.some((n) => (n % 2 == 0));
console.log(anyOneEven);
anyOneEven = [1,3,5,9].some((n) => (n % 2 == 0));
console.log(anyOneEven);
anyOneEven = [1,2,3,7].some((n) => (n % 2 == 0));
console.log(anyOneEven);

// **************************arr.reduce()****************************

let sum = [1,2,3,4].reduce( (res , n) => (res + n)); //output - 10
console.log(sum);

let max = [2,3,4,5,3,4,7,8,1,2].reduce( (max, n) => {
    if(n > max){
        return n;
    } else {
        return max;
    }
});

console.log(max);

console.log(" ");
// **************************Iteration using Spred(...)****************************

let min = Math.min(6,7,3,7,3,4,6);
console.log(min);
let nums = [6,7,3,7,3,4,6];
// min = Math.min(arr); //wrong syntax output(NaN)
min = Math.min(...nums);
console.log(min);
console.log(...nums);
console.log(1,2);

// min = nums.reduce((mini, n) => mini = Math.min(mini, n));
console.log(min);

console.log("ApnaCollege");
console.log(..."ApnaCollege");

console.log(" ");

let forCopy = [2,56,7,3,32,9];
let copy = [...forCopy];
console.log(copy);

let StringForCopy = "ApnaCollege";
let CharCopy = [...StringForCopy];
console.log(CharCopy);

let first = [1,3,5,7,9];
let second = [2,4,6,8,10];
let combine = [...first, ...second];
console.log(combine);

let data = {
    email : "abc@gmil.com",
    pass : 321
}

let deepCopy = {...data};
console.log(deepCopy);
deepCopy = {...data, id : 1};
console.log(deepCopy);

let ar = [1,2,3,4,5]; // val
let obj1 = {...ar};// want key -> val (use index for key)
console.log(obj1);

let obj2 = {..."Hello"};
console.log(obj2);

// *************************Rest****************************
function summm(...args){
    //arguments
    for(let i = 0; i < args.length; i++){
        console.log(`You gave us : ${args[i]}`);
    }
}

summm(1,5,2);
// summm(1,6,36,7,8,4,3);

function summm2(){
    //arguments is automaticly created when a function is called it is similer to as a array.
    //  but it can't use array functions like (.push, .pop, .forEach, .reduce , etc....)
    for(let i = 0; i < arguments.length; i++){
        console.log(`arguments[${i}] : ${arguments[i]}`);
    }
}

summm2(1,6,74,2,21);

function sum1(...args){
    return args.reduce((res, n) => res + n);
}

console.log(sum1(3,7,7,33,64,8,9,2));

function sum2(msg, ...args){
    console.log(msg);
    return args.reduce((res, n) => res + n);
}

console.log(sum2("hi",3,7,7,33,64,8,9,2));

//***********************Destructering***********************
let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];

// let [winner, runnerup, secondRunnerup] = names //tony, bruce, peter
let [winner, runnerup, ...others] = names;

// console.log(winner, runnerup, secondRunnerup);
console.log(winner, runnerup, ...others);

console.log(" ");

const child = {
    name : "karan",
    age: 14,
    class : 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd",
};

// let {username, password} = child;
let {username: user, password, city = "Mumbai", age = 18} = child; // = 18 (default parameter)
// console.log(username, password);
console.log(user, password, city, age);