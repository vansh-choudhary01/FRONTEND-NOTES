const student = {
    name: "shradha",
    age: 18,
    contact: "abc@gmil.com"
};

const item = {
    price : 110.50,
    discount : 50,
    color : ["red", "pink"]
};

const post = {
    username: "@shradhakhapra",
    content: "This is my #firstPost",
    likes : 150,
    reposts: 5,
    tags: ["@apnacollege", "@delta"]
};

// post["username"]; post["likes"];
// post.username; post.like;

const obj = {
    1 : 'a',
    2 : 'b',
    null : 'c',
    true : 'd',
    undefined : 'e'
};

// obj[1], obj["1"], can't work(obj."1", obj.1);
// obj[true], obj["true"],

const child = {
    name : "shradha",
    age : 23,
    marks : 94.4,
    city : "Delhi"
};

child.city = "Mumbai";
child.gender = "Female";
child.marks = 'A';

child.marks = [99, 89, 74];

delete child.age;
// delete child; (can't work)
// child = null;(this will work for delete the child object)


// nested object's

const classInfo = {
    aman : {
        grade : "A+",
        city : "Delhi"
    },
    karan : {
        grade : "O",
        city : "Mumbai"
    },
    shradha : {
        grade : "A",
        city : "Pune"
    }
};

const array = {classInfo, child, obj, student, post, item};
const info = [
    {
        name : "aman",
        grade : "A+",
        city : "Delhi"
    },
    {
        name : "karan",
        grade : "O",
        city : "Mumbai"
    },
    {
        name : "shradha",
        grade : "A",
        city : "Pune"
    }
];

info[2].gender = "female"; 