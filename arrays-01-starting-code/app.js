// const numbers = [1, 2, 3]; // preferred way to create an array
// console.log('numbers -', numbers);

// // // WILL LIKELY NOT USE THE FOLLOWING METHOD.
// // // const moreNumbers = new Array(); // equals [] - length of 0. Constructor function.

// // const moreNumbers = new Array('Hi!', 'Welcome'); // ['Hi!', 'Welcome']
// // console.log('more numbers -', moreNumbers);

// // const moreNumbers = new Array(5); // STRANGE BEHAVIOR - 5 'empty' fixed-length array of '#' length
// // // can omit 'new' keyword and will get the same respone.
// // console.log('more numbers -', moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2); // slower than using [].
// // console.log('yetMoreNumbers - ', yetMoreNumbers);


// // // CHECK THIS OUT
// // const moreNumbers = Array.from("Hi!"); // will make an array out of what's in the ().
// // console.log('moreNumbers -', moreNumbers);

// const listItems = document.querySelectorAll('li'); // Nodelist - can iterate through it. ARRAY LIKE OBJECT - NOT A REAL ARRAY
// console.log('listItems -', listItems);

// const arrayListItems = Array.from(listItems); // Convert array-like or iterables to REAL ARRAYS OR HTML COLLECTION.
// console.log('arrayListItems -', arrayListItems);


// // */*/* MORE ON ARRAYS - INDEX BASED *\*\*
// const hobbies = ['Cooking', 'Sports']; // normal array
// const personalData = [30, 'Shawn', {moreDetails: []}];  // different types - mixed data

// const analyticsData = [[1, 1.6], [-5.4, 2.1]]; // nested or multi-dimensional arrays 

// // Data must be iterable or loop will break EXCEPTION - strings or other arrays will work.
// // const analyticsData = [[1, 1.6], [-5.4, 2.1], 5]; // this will break the loop due to the '5'.
// for (const data of analyticsData) {
//   for (dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// // NEW SECTION
// // ADDING OR REMOVING ITEMS AT THE BEGINNING OR END OF THE ARRAY
// // PUSH and POP are faster than SHIFT and UNSHIFT because they only affect the LAST value in the array.
// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading'); // adds item to the end of the array.
// hobbies.unshift('Coding'); // adds item to the beginning of the array.
// const poppedValue = hobbies.pop(); // Removes the last element in the array. - RETURNS THE ELEMENT TYPE REMOVED.
// hobbies.shift() // removes item at the BEGINNING of the array. Moves elements 1 space to the left.
// console.log('initial -', hobbies);

// // Changing items other than first or last
// hobbies[1] = 'Biking'; // Replaces 2nd item to Biking.
// // hobbies[5] = 'Smelling'; // Results in 'empty' indicies before element due to 'index - 5' selection. RARELY USED!!!
// console.log('index hobbies', hobbies, hobbies[4]); // hobbies[4] undefined because index is 'empty'.

// // NEW SECTION
// // */*/* THE SPLICE METHOD - inserting elements between exiting elements *\*\*
// // Splice must be used on REAL ARRAYS and RETURNS new array.
// // // - Takes 3 arguments: 1. index to start. 2. how many places to replace. 3. What to replace them with.
// // NOTE - If no 3rd argument, will delete item at specified index.
// // hobbies.splice(0, 1); // Sports, Biking
// // console.log('splice - 0, 1', hobbies);

// // hobbies.splice(0, 0, 'Good Food'); // Good Food, Sports, Cooking - started at index 0
// // console.log('splice - 0, 0', hobbies);

// hobbies.splice(1, 0, 'Good Food'); // Sports, Good Food, Biking - started at index 0
// console.log('splice - 1, 0', hobbies);

// const removedElements = hobbies.splice(-2, 1); // removes last item due to looking on the right of the array.
// console.log('removed Elements - ', hobbies); // Sports, Biking

// // NEW SECTION
// // */*/* SLICE METHOD  - COPIES ARRAYS*\*\*
// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// // const storedResults = testResults; // returns identical arrays
// // const storedResults = testResults.slice(); // returns a copy of the original array with new items - if added.
// // const storedResults = testResults.slice(0, 2); // returns new array including 1st index BUT excluding last index. Returnd 1, 5.3
// // const storedResults = testResults.slice(3, 2); // does not work.
// // const storedResults = testResults.slice(-3, -1); // returns 10.99, -5. Both must be negative.
// const storedResults = testResults.slice(2); // returns 1.5, 10.99, -5. 10. Returns from index to the end.

// testResults.push(5.91);

// console.log('storedResults - ', storedResults); // returns a brand new array based on old array.
// console.log('testResults- ', testResults); 

// // NEW SECTION
// */*/* CONCAT - ADDS 2 ARRAYS TOGETHER TO MAKE A NEW ARRAY *\*\*
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10]; // added 2nd 1.5 for lastIndexOf()
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log('storedResults - ', storedResults); // [1, 5.3, 1.5, 10.99, -5, 10, 3.99, 2] NOTE: 3.99 and 2 added.
console.log('testResults- ', testResults); // [1, 5.3, 1.5, 10.99, -5, 10, 5.91] NOTE: 5.91 added

// NEW SECTION
// */*/* INDEXOF AND LASTINDEXOF *\*\*
console.log('ondexOf - ', testResults.indexOf(1.5)); // returns 1st matching element.
console.log('ondexOf - ', testResults.lastIndexOf(1.5)); // returns 1st matching element from the right.

const personData = [{name: 'Shawn'}, {name: 'Max'}];
console.log(personData.indexOf({name: 'Shawn'})); // returns -1 unable to find due to reference data.