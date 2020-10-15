// NOW - use 'let' and 'const' only. 
// 'var' is global scoped and very flexible.

var name = 'Max';

if (name === 'Max') {
  var hobbies = ['Sports', 'Cooking'];
  console.log(hobbies);
}

// Using 'var' keyword will allow variable to be global scope and will not throw an error.
// 'let' and 'const' are block scope variables and more restrictive; thus better.
function greet() {
  var age = 30;
  var name = 'Manuel';
  console.log(name, age, hobbies); // hobbies is not defined inside the function and will not display
}

console.log(name, hobbies);

greet();