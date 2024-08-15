// ***************************Qs 1************************
let arr = [2,3,6,5,6];
let squre = arr.map( (n) => n * n );
let sum = arr.reduce( (res, n) => res + n);
let avg = sum / arr.length;

// ***************************Qs 2************************
let plusFive = arr.map( (n) => n + 5);

let strings=["adam","bob","catlyn","donald","eve"];
let upperCase = strings.map( (string) => string.toUpperCase());

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr, 
    ...args.map( (v) => v * 2)
];

console.log(doubleAndReturnArgs([1,2,3],4,5));
console.log(doubleAndReturnArgs([2], 4, 4));

// ***************************Qs 3************************
let obj1 = {
    name : "vansh",
    age : 19,
}

let obj2 = {
    marks : {
        math : 99,
        phy : 97,
        chy : 98
    },

    college : "Shobhit University"
}

const mergeObjects = (a, b) => ({
    ...a,
    ...b
});

console.log(mergeObjects(obj1, obj2));