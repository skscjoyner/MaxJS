// // */*/* SET *\*\*
// // data structures used to help to manage UNIQUE values.
// // const ids = new Set(); // empty set is allowed
// // const ids = new Set([1, 2, 3]); // shows indexes but CANNOT access via [0]
// const ids = new Set(['Hi', 'from', 'set!']); 

// // console.log(ids.has(1)); // tells if something is included in the set. Returns TRUE or FALSE.

// ids.add(2); // values MUST BE unique. Will not be added due to duplicate.
// if (ids.has('Hi')) {
//   ids.delete('Hi'); // can delete the value this way. WILL NOT THROW ERRORS. Likely not used in this way.
// }

// for (const entry of ids.entries()) { // can go through all entries in the array. RETURNS THE SAME VALUE TWICE.
//   // console.log(entry);
//   console.log(entry[0]); // deletes the second value in the 'set'
// };


// // */*/* MAPS *\*\*
// // Can use ANY values and any types as keys. Can be mixed.
// // Better performance for large quantities of data. More than 10 entries.
// // Better performance when add and deleting data frequently.

// const person1 = {name: 'Max'};
// const person2 = {name: 'Manuel'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]); // key - value pairs

// personData.set(person2, [{date: 'two weeks ago', price: 100}]); // ADD data to a Map

// console.log('Map object - ', personData);
// console.log('key - ', personData.get(person1)); // GET method. 

// for (const entry of personData.entries()) { // Method 1 to access data.
//   console.log('entry1 - ', entry);
// };

// for (const [key, value] of personData.entries()) { // Additional Method 1 to access data.
//   console.log('key/value - ', key, value);
// };

// for (const key of personData.keys()) { // Method 2 to access data. Only obtain the KEYS.
//   console.log('key1 - ', key);
// };

// for (const value of personData.values()) { // Method 2 to access data. Only obtain the VALUES.
//   console.log('value1 - ', value);
// };

// console.log(personData.size); // another property. '2' items in the Map.


// // */*/* OBJECTS *\*\*

// // Only strings, numbers, symbols as keys. Can be mixed.
// // Perfect for small/medium-sized sets of data.
// // Easier/quicker to create with mostly better performance.


// NEW SECTION - WILL LIKELY RARELY USE...IF EVER.
// */*/* WEAKSET *\*\*
// MUST be object data!
// Can only store objects and can clear them for garbage collection.
// USED WHEN you will let go of data so it can be garbage collected - DATA NO LONGER NEEDED.

// let person = {name: "Shawn"}; // MUST be an object variable.
// const persons = new WeakSet();
// persons.add(person);

// // ... some operations
// person = null;

// console.log(persons);


// */*/* WEAKMAP *\*\*
// Very similar to WEAKSET

let person = {name: "Shawn"}; // MUST be an object
const persons = new WeakSet();
persons.add(person); // 'add, delete, get, and has' are the ONLY methods available.

// ... some operations
// person = null; // will allow for RELEASE of THIS DATA (memory address) for garbage collection if no longer needed

console.log('persons - ', persons);

const personData = new WeakMap(); // normal MAP will hold onto data you don't need.
personData.set(person, 'Extra info');

person = null;

console.log('personData - ', personData);

