// *****************************Practice 1***********************************
let sq = n => n * n;

// *****************************Practice 2***********************************
// let count = 0;
// let id = setInterval(() => {
//     count++;
//     console.log("Hello World");
//     if(count == 5){
//         clearInterval(id);
//     }
// }, 2000);

let id = setInterval(() => {
    console.log("Hello World");
}, 2000);

setTimeout(() => {
    console.log("clear Interval ran");
    clearInterval(id);
}, 2000*5);


// ************************************Assignment 1*********************************
let arr = [100,50,50];

let avg = (arr) => {
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++){
    //     sum += arr[i];
    // }
    // return sum / arr.length;
    return arr.reduce((sum, v) => sum + v) / arr.length;
}

console.log(avg(arr));

// ***************************************Assignment 2*******************************
let isEven = n => (n % 2 == 0);

console.log(isEven(4));
console.log(isEven(5));


// ***************************************Assignment 5*******************************

let len=4;
function callback(){
    console.log("hi");
    console.log(this.len);
}
const object={
    length:5,
    method(callback){
        callback();
    }
};

console.log(object.method(callback,1,2));