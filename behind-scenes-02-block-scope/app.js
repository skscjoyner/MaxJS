// // VAR is more readily accessible than let/const because they are BLOCK level
// // LET/CONST are more restrictive and FORCE you to write better/cleaner code.
// // VAR is still supported, but it is better to use LET/CONST nnow.

// let name = 'Max';
// let hobbies;

// if (name === 'Max') {
//   let hobbies = ['Sports', 'Cooking']; // If use VAR here, will not error.
//   console.log(hobbies);
// }

// function greet() {
//   let age = 30;
//   let name = 'Manuel';
//   console.log(name, age, hobbies);
// }

// console.log(name, hobbies);

// greet();

// /*/*/* HOISTING => moving the variable declaration above the call automatically. *\*\*\
// LET/CONST do NOT WORK in hoisting!!!!
console.log(userName);

var userName = "Max"; // output => undefined
// let userName = "Max"; // output => error

// STRICT MODE =>  Can be turned on or off. 
// "use strict"; // turns strict mode on.
// strict mode is used to make you write more concise code.