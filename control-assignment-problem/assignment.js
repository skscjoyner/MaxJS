const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

// // NUMBER 1

// if (randomNumber > 0.7) {
//   console.log(randomNumber);
//   alert('The number is greater than 0.7');
// } else {
//   console.log(randomNumber);
//   alert('Not this time');
// }

// // NUMBER 2

// const numbers = [1,2,3,4,5];
// // for (let i = 0; i < numbers.length; i++) {
// //   console.log(numbers[i]);
// // }

// const numbers = [1,2,3,4,5];
// for (const num of numbers) {
//   console.log(num);
// }

// // NUMBER 3

// const numbers = [1,2,3,4,5];
// for (let i = numbers.length - 1; i >= 0; i--) {
//   console.log(numbers[i]);
// }

// NUMBER 4

const ranNum = Math.random();
console.log("randomNumber is: " + randomNumber);
console.log("RanNum is: " + ranNum);
if ((ranNum > 0.70 && randomNumber > 0.70) || ranNum < .2 || randomNumber < .2) {
  alert('Greater than .7 or less than .2');
} 
