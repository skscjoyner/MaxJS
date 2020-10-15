// NOW - use 'let' and 'const' only. 
// 'var' is global scoped and very flexible.
// var name = 'Shawn'
let name = 'Shawn';
let hobbies = ['Sports', 'Cooking']; // defining variable here makes it globally available.

if (name === 'Shawn') {
  let hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

// Using 'var' keyword will allow variable to be global scope and will not throw an error.
// 'let' and 'const' are block scope variables and more restrictive; thus better.
function greet() {
  let age = 30;
  let name = 'Manuel';
  console.log(name, age, hobbies); // hobbies is not defined inside the function and will not display
}

console.log(name, hobbies);

greet();