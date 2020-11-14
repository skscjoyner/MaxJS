const numbers = [1, 2, 3]; // preferred way to create an array
console.log('numbers -', numbers);

// // const moreNumbers = new Array(); // equals [] - length of 0.
// // const moreNumbers = new Array('Hi!', 'Bye'); // ['Hi!', 'Bye']
// const moreNumbers = new Array(5); // STRANGE BEHAVIOR - 5 'empty' fixed-length array of # length
// // can omit 'new' keyword and will get the same respone.
// console.log('more numbers -', moreNumbers);

// const yetMoreNumbers = Array.of(1, 2); // slower than using [].
// console.log('yetMoreNumbers - ', yetMoreNumbers);

// const moreNumbers = Array.from("Hi!"); // will make an array out of what's in the ().
// console.log('moreNumbers -', moreNumbers);

const listItems = document.querySelectorAll('li'); // Nodelist - can iterate through it. ARRAY LIKE OBJECT - NOT A REAL ARRAY
console.log('listItems -', listItems);

const arrayListItems = Array.from(listItems); // Convert array-like or iterables to real arrays.
console.log('arrayListItems -', arrayListItems);
