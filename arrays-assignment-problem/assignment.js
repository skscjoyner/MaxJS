// TASK 1
const nums = [1, 3, 8, 45, 10, 25];
console.log('array - ', nums); // [1, 3, 8, 45, 10, 25]

// TASK 1A
const filteredNums = nums.filter(num => num > 5);
console.log('filter > 5 - ', filteredNums); // [8, 10, 25, 45]

// TASK 1B
const numMap = nums.map(nums => ({num: nums}));
console.log('map - ', numMap); // [{num: 1}, {num: 3}, {num: 8}, {num: 45}, {num: 10}, {num: 25}]

// TASK 1C
const reducedNum = nums.reduce((currResult, currVal) => currResult * currVal, 1);
console.log('reduce - ', reducedNum); // 6000 or 27000 - if 45 is included in the array.


// TASK 2
function findMax(...nums) { // REST parameter
  let maxNum = nums[0];
  for (const num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
}
// call the function with SPREAD operator on array 
console.log('max - ', findMax(...nums)); // 45


// TASK 3
function findMinAndMax(...nums) {
  let maxNum = nums[0];
  let minNum = nums[0];
  for (const num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
    if (num < minNum) {
      minNum = num;
    }
  }
  return [minNum, maxNum];
}

const [currMin, currMax] = findMinAndMax(...nums); // store in separate consts
console.log('min - ' + currMin, 'max - ' + currMax); // min - 1 max - 45


// TASK 4
const list = new Set(); // SET will not allow duplicates.
list.add(1);
list.add(3);
list.add(1);

console.log(list); // {1, 3}


// */*/*  CHAINED METHODS  *\*\*
const originalArray = [{price: 10.99}, {price: 5.99}, {price: 29.99}];
const sum = originalArray.map(obj => obj.price)
    .reduce((sumVal, curVal) => sumVal + curVal, 0); // add sumVal to curVal
    console.log('chain - ', sum); //46.97 - added all values


function greeting() {
  let name = prompt('What is your Name');
  let result = "Hello " + name
  console.log(result);
}
greeting();


function add(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}
add(11, 5);
