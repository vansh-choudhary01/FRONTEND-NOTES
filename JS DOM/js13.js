let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click", async ()=> {
    let link = await getDogs();
    let img = document.querySelector("img");
    img.setAttribute("src", link);

})

async function getDogs() {
    try {
        let res = await axios.get(url);
        return res.data.message;
    } catch(err) {
        return err;
    }
}

// **********************Add Headers*****************
let url2 = "https://icanhazdadjoke.com/";

async function getJokes() {
    try {
        let config = {headers: {Accept: "application/json"}};
        let res = await axios.get(url2, config);
        console.log(res.data.joke);
    } catch {

    }
}

// ************************get more then one result as a array******************
let url3 = "http://universities.hipolabs.com/search?name=";
let ul = document.querySelector("ul");
let enter = document.querySelector("#enter");
let input = document.querySelector("input");

enter.addEventListener("click", async()=> {
    ul.innerText = "";
    let list = await getUni(input.value);
    console.log(list);
    input.value = "";
    for(let curr of list) {
        let li = document.createElement("li");
        li.innerText = curr.name;
        ul.appendChild(li);
    }
})

async function getUni(country) {
    try {
        let res = await axios.get(url3+country);
        return res.data;
    } catch {
        return [];
    }
}
