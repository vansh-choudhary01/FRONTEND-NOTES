// *******************Use of async(return promise) and await(js is stoped until work is not complete)

{async function greet() {
    throw "404 page not found";   
    return "hello!";
}

greet()
    .then((result) => {
        console.log("promise was resolved");
        console.log("result was : ", result);
    })
    .catch((err) => {
        console.log("promise was rejected");
        console.log("error was : ", err);
    })

// let demo = async () => {
//     return 5;
// }

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            console.log(num);
            resolve();
        }, 2000);
    })
}

async function demo() {
    await getNum();
    await getNum();
    await getNum();
}
}

// *******************JSON formet, functions, methods*************
{let jsonRes = 
    '{ "fact": "After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.","length": 92}';
console.log(jsonRes);

// ***************JSON TO Object(JS)*************
let validRes = JSON.parse(jsonRes);
console.log(validRes);

// ***************Object(JS) TO JSON*************
console.log(JSON.stringify(validRes));
}

// ******************Use of Api******************
let url = "https://catfact.ninja/fact";
{
{fetch(url) 
    .then((res) => {
        console.log(res);
        return res.json();
        // res.json().then((data) => {
        //     console.log(data)
        // });
    })
    .then((data) => {
        console.log(data);
        console.log(data.fact);
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })
console.log("i am happy");
}
}

// *******************Use of fetch****************

{async function getFacts() {
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);
    } catch(err) {
        console.log(err);
    }
}}

// ******************Use of axios*****************
{
let button = document.querySelector("button");
let p = button.nextElementSibling.nextElementSibling;

button.addEventListener("click", async () => {
    p.innerText = await getFacts();
})

async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    } catch(err) {
        return err;
    }
}
}