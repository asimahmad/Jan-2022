'use strict'
console.log("Using strict mode");
console.log('Use strict is already automatically enabled in the js now a days');


// Variables

let a;
a = 'Asim';
console.log(a);

let b = "Simrat";
console.log(b);


let user = "Kriti",
    age = 23,
    dept = 'CSE';
console.log(user);



// below one is dynamically typed meaning: there exist data types but are not bound to any of them.
let msg = "Hello user";
msg = 123;

console.log(msg);


console.log(1 / 0);

console.log(Infinity);
console.log("Asim" / 2);


// double quotes
let str1 = "Double quotes";
let str2 = 'Single quotes';
let str3 = `Backticks`;

let str4 = `Hello there there, ${str1}`;

console.log(str1 + '\n' + str2, str3, str4);