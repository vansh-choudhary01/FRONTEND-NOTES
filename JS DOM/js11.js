// *********** call stack*****************
{function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    return two() + one();
}

console.log(three());}

// *************Synchrous nature(line by line)************
{let a = 25;
console.log(a);
let b = 10;
console.log(b);
console.log(a + b);}

// *************Asynchrous nature************
{function printHlo() {
    setTimeout(()=> {
        console.log("hello");
    },2000);
    setTimeout(()=> {
        console.log("hello");
    },2000);
    console.log("Api can't work");
}

printHlo();}

// *************Callback Hell****************

{let h1 = document.querySelector("h1");

function changeColor(color, delay, nextColorChange) {
    setTimeout(()=> {
        h1.style.color = color;
        if(nextColorChange) nextColorChange();
    }, delay);
}

changeColor("red", 1000, ()=>{
    changeColor("orange", 1000, ()=> {
        changeColor("green", 1000, ()=> {
            changeColor("yellow", 1000, ()=> {
                changeColor("blue", 1000);
            });
        });
    });
});

// callBacks nesting --> callBack hell
}

// ****************CallBack Hell******************

{function saveToDb(data, success, failure) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if(internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}

saveToDb(
    "apna college",
    ()=>{
        console.log("success : your data was saved ");
        saveToDb("hello world", ()=>{
            console.log("success2 : your data was saved ");
            saveToDb("shradha", ()=> {
                console.log("success3 : your data was saved");
            }, 
            ()=>{
                console.log("failure3 : week connection");
            })
        },
        ()=>{
            console.log("failure2 : week connection");
        })
    },
    ()=>{
        console.log("failure : week connection. data not saved");
    }
)}

// ****************Promise***********************

function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if(internetSpeed > 4) {
            resolve("success : data was saved");
        } else {
            reject("failure : weak connection");
        }
    });
}

{let request = saveToDb("apna college"); // req = promise object
console.log(request);
request.then( ()=> {
    console.log("promise was resolved");
})
.catch( ()=> {
    console.log("promise was rejected");
})
            //better version
saveToDb("apna college")
    .then( ()=> {
        console.log("promise was resolved");
    })
    .catch( ()=> {
        console.log("promise was rejected");
    })
}

// ***************callBack nesting(Promisess)*****************

saveToDb("apna college")
    .then((result) => {
        console.log("data1 saved");
        console.log("result of promise : ", result);
        return saveToDb("helloWorld");   
    })
    .then((result) => {
        console.log("data2 saved");
        console.log("result of promise : ", result);
        return saveToDb("shradha");
    })
    .then((result) => {
        console.log("data3 saved");
        console.log("result of promise : ", result);
    })
    .catch((error) => {
        console.log("promise was rejected");
        console.log(" of promise : ", error);
    })


// *****************callBack nesting(Promises) on color change*****************

{let h1 = document.querySelector("h1");

function colorChange(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            if(num > 3) {
                reject("rejected");
            }
            h1.style.color = color;
            resolve(`color changed! to : ${color}`);
        }, delay);
    });
}

async function demo() {
    try{
        await colorChange("red", 1000);
        await colorChange("orange", 1000);
        await colorChange("green", 1000);
        await colorChange("pink", 1000);
        await colorChange("blue", 1000);
    } catch(err) {
        console.log("error was : ", err);
    }

    let a = 5;
    console.log("new number was : ", a);
}

// colorChange("red", 1000)
//     .then((result) => {
//         console.log(result);
//         return colorChange("orange", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//         return colorChange("green", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//         return colorChange("pink", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//         return colorChange("blue", 1000);
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch(() => {
//         console.log("calor was't changed !");
//     })
// 
}

