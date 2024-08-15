let student = ["aman", "shradha", "rajat"];
let info = ["ravan", 34, 89.9];
let arr = [];
arr[0] = "vansh";
arr[9] = "rahul";
// console.log(arr);

let fruits = ["apple", "mango", "litchi"];
fruits[0] = "banana";
fruits[10] = "pineapple";

let cars = ["audi", "bmw", "lambergini"];
//push(add last) // pop(delete last) // unsift(add first) // sift(delete first)
//found
// console.log(cars.indexOf("bmw"));
// console.log(cars.includes("bmw"));
//not found
// console.log(cars.indexOf("yellow"));
// console.log(cars.includes("yellow"));

let primary = ["red", "yellow", "blue"];
let secondary = ["orange", "green", "voilet"];
let merge = primary.concat(secondary);
// console.log(merge);
// console.log(primary.reverse()); //also reverse main array

// part of a array(stIdx, endIdx)
// console.log(merge.slice(), merge.slice(2), merge.slice(2,3), merge.slice(-2)); 


//change in original array
// syntax = arr.splice(index, deleteCount, add, add...)

let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// colors.splice(4);
// colors.splice(0,1);
// colors.splice(0, 1, "black", "gray");
// colors.sort();

let ttt = [ ['X', null, 'O'], [null, 'X', null], ['O', null, 'X']];