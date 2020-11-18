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
// // const moreNumbers = Array.from("Hi!"); // will make an array out of what's in the (). ['H', 'i', '!']
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
// // */*/* CONCAT - ADDS 2 ARRAYS TOGETHER TO MAKE A NEW ARRAY *\*\*
// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10]; // added 2nd 1.5 for lastIndexOf()
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log('storedResults - ', storedResults); // [1, 5.3, 1.5, 10.99, -5, 10, 3.99, 2] NOTE: 3.99 and 2 added.
// console.log('testResults- ', testResults); // [1, 5.3, 1.5, 10.99, -5, 10, 5.91] NOTE: 5.91 added

// // */*/* INCLUDES *\*\*
// console.log('includes - ', testResults.includes(10.99)); // returns true.

// // NEW SECTION
// // */*/* INDEXOF AND LASTINDEXOF *\*\*
// console.log('indexOf - ', testResults.indexOf(1.5)); // returns 1st matching element.
// console.log('lastIndexOf - ', testResults.lastIndexOf(1.5)); // returns 1st matching element from the right.

// const personData = [{name: 'Shawn'}, {name: 'Manuel'}];
// console.log(personData.indexOf({name: 'Manuel'})); // returns -1 unable to find due to reference data.

// // NEW SECTION
// // */*/* FIND and FIND INDEX *\*\*
// const manuel = personData.find((person, idx, persons) => { // 3 arguments. 1. single obj of array. 2. index of  single element. 3. full array.
//   return person.name === 'Manuel'; // returns {name: 'Manuel'} returns original NOT copy of item in array.
// });

// manuel.name = 'Anna';

// console.log(manuel, personData); // returns {name: "Anna"} (2) [{name: 'Shawn'}, {name: 'Manuel'}}]

// // ------------  findIndex  -----------------

// const shawnIndex = personData.findIndex((person, idx, persons) => { // 3 arguments. 1. single obj of array. 2. index of  single element. 3. full array.
//   return person.name === 'Shawn';
// }); 

// console.log(shawnIndex); // returns 0

// // NEW SECTION
// // */*/* FOREACH LOOP *\*\*

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) { // does not give index
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }
// // console.log('for of loop -', taxAdjustedPrices);

// prices.forEach((price, idx, prices) => { // gives index and can transform
//   const priceObj = { index: idx, taxAdjPrice: price + (1 * tax) }
//   taxAdjustedPrices.push(priceObj);
// });
// console.log('for each loop - ', taxAdjustedPrices);

// // NEW SECTION
// // */*/* MAP *\*\*

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;

// const taxAdjustedPrices = prices.map((price, idx, prices) => { // gives index and can transform
//   const priceObj = { index: idx, taxAdjPrice: price + (1 * tax) }
//   return priceObj; // Must return something - a map for a transformed array in memory. Original array untouched.
// });

// // console.log('map prices - ', prices, taxAdjustedPrices);

// NEW SECTION
// */*/* SORT AND REVERSE *\*\*

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => { // gives index and can transform
  const priceObj = { index: idx, taxAdjPrice: price + (1 * tax) }
  return priceObj; // Must return something - a map for a transformed array in memory. Original array untouched.
});

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1; // -1
  } else if (a === b) {
    return 0;
  } else {
    return -1; // 1 
  }
});

console.log('sorted - ', sortedPrices); // returns [3.99, 5.99, 6.59, 10.99]
// NOTE - could change conditions and will also reverse the order. SEE ABOVE
console.log('reversed -', sortedPrices.reverse()); // returns [10.99, 6.59, 5.99, 3.99]

// NEW SECTION
// */*/* FILTER *\*\*

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6; // returns a brand new array
// });

// Since only 1 expression, no return statement or curly braces needed. This is why arrow functions are better.
const filteredArray = prices.filter(price => price > 6); // returns automatically.

console.log('filter -', filteredArray);


// NEW SECTION 
// */*/* REDUCE METHOD  - Reduces an array to a simpler value (ex. singel value) *\*\*

// let sum = 0;

// prices.forEach((price) => {
//   sum += price;
// });

// console.log('reduce - ', sum);


const sum = prices.reduce((prevValue, currValue, currIndex, originalArray) => {
// prevValue = 0 or value set by developer
// currValue = 1st value in the array
// currIndex = index of value in the array
// originalArray = starting point
return prevValue + currValue;
}, 0);

console.log('reduce - ', sum);

// The above reduces to the following:
const sum1 = prices.reduce((prevValue, currValue) => prevValue + currValue, 0);

console.log('reduce1 - ', sum1);

// CHAINING METHODS TOGETHER
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum3 = originalArray.map(obj => obj.price)
    .reduce((sumVal, curVal) => sumVal + curVal, 0);

    console.log('sum3 - ', sum3);