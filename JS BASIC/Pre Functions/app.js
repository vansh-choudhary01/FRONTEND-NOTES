let output = "the total Price is : " + (10 + 5) + " Rupees. ";
// ( ``) backtic
console.log(`the total price is : ${10 + 5} Rupees.`);

alert("something is wrong");
console.log("this is a simple log");
console.error("this is a error log");
console.warn("this is a warning log");

let firstName = prompt("enter your first name");
let lastName = prompt("enter your last name");
alert(`Hellow ${firstName} ${lastName}!`);

let str = "   hel  low     ";
console.log(str);
console.log(str.trim());
console.log(str);

let password = prompt("enter your pass : ");
let newPass = password.trim();
console.log(newPass);

let name = "        Apna College";
console.log(name);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('a'));
console.log(name.toUpperCase().trim());

let args = "ILoveCoding";
console.log(args.slice(1,5));
console.log(args.slice(5));
console.log(args.slice(-2)); //args.length(11) - 2 = 9;
console.log(args.replace("Love", "Do"));
console.log(args.replace("o", "x"));
console.log(args.repeat(3));

let msg = "help!";
console.log(msg.trim().toUpperCase());
name = "ApnaCollege";
console.log(name.slice(4,9));
console.log(name.indexOf("na"));
console.log(name.replace("Apna", "Our"));
console.log(name.slice(4).replace("l", "t").replace("l", "t"));