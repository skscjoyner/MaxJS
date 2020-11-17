const numbers = [1, 2, 3]; // preferred way to create an array
console.log('numbers -', numbers);

// // WILL LIKELY NOT USE THE FOLLOWING METHOD.
// // const moreNumbers = new Array(); // equals [] - length of 0. Constructor function.

// const moreNumbers = new Array('Hi!', 'Welcome'); // ['Hi!', 'Welcome']
// console.log('more numbers -', moreNumbers);

// const moreNumbers = new Array(5); // STRANGE BEHAVIOR - 5 'empty' fixed-length array of '#' length
// // can omit 'new' keyword and will get the same respone.
// console.log('more numbers -', moreNumbers);

// const yetMoreNumbers = Array.of(1, 2); // slower than using [].
// console.log('yetMoreNumbers - ', yetMoreNumbers);


// // CHECK THIS OUT
// const moreNumbers = Array.from("Hi!"); // will make an array out of what's in the ().
// console.log('moreNumbers -', moreNumbers);

const listItems = document.querySelectorAll('li'); // Nodelist - can iterate through it. ARRAY LIKE OBJECT - NOT A REAL ARRAY
console.log('listItems -', listItems);

const arrayListItems = Array.from(listItems); // Convert array-like or iterables to REAL ARRAYS OR HTML COLLECTION.
console.log('arrayListItems -', arrayListItems);


// */*/* MORE ON ARRAYS - INDEX BASED *\*\*
const hobbies = ['Cooking', 'Sports']; // normal array
const personalData = [30, 'Shawn', {moreDetails: []}];  // different types - mixed data

const analyticsData = [[1, 1.6], [-5.4, 2.1]]; // nested or multi-dimensional arrays 

// Data must be iterable or loop will break EXCEPTION - strings or other arrays will work.
// const analyticsData = [[1, 1.6], [-5.4, 2.1], 5]; // this will break the loop due to the '5'.
for (const data of analyticsData) {
  for (dataPoint of data) {
    console.log(dataPoint);
  }
}

