// *********************************First************************************
let arr = [2,3,4,56,6,22,4];
let n = 5;

function larger(n) {
    let ans = [];
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] > n){
    //         ans.push(arr[i]);
    //     }
    // }

    ans = arr.filter((i) => i > n);

    return ans;
}

console.log(larger(n));
// *********************************Second************************************


let str = "abcdabcdefgggh";

function extractUniqueChar(str) {
    let ans = "";
    // for(let i = 0; i < str.length; i++){
    //     let curr = str[i];
    //     if(ans.indexOf(curr) == -1){
    //         ans += curr;
    //     }
    // }

    ans = [...new Set(str)].join('');

    return ans;
}

console.log(extractUniqueChar(str));

// *************************************Third******************************************

let country = ["Australia","Germany","United States of America"];
function largestString(country){
    let last = "";
    // for(let i = 0; i < country.length; i++){
    //     if(last.length < country[i].length){
    //         last = country[i];
    //     }
    // }

    return country.reduce((res, c) => res = res.length > c.length ? res : c);

    // return last;
}

console.log(largestString(country));

// ***************************************Fourth**********************************************

let s = "United States of America";

function countVowels(s){
    let count = 0;
    // s = s.toLowerCase();
    // for(let i = 0; i < s.length; i++){
    //     if(s[i] == 'a'||s[i] == 'e'||s[i] == 'i'||s[i] == 'o'||s[i] == 'u'){
    //         count++;
    //     }
    // }

    // Use a regular expression to match all vowels (case-insensitive)
    // The 'g' flag means to search for all matches in the string
    // The 'i' flag means the search is case-insensitive (matches both uppercase and lowercase)
    count =  (s.match(/[aeiou]/gi) || []).length; // If no matches, return 0

    return count;
}

console.log(countVowels(s));

// ****************************************Five**********************************************

let start = 100;
let end = 200;

function generateNumber(start, end){
    let diff = end - start;
    return Math.floor((Math.random() * diff) + start);  //start - end (end is excludive)
}

console.log(generateNumber(start, end));