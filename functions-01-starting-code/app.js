const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WINS = "PLAYER WINS";
const RESULT_COMPUTER_WINS = "COMPUTER WINS";

let gameIsRunning = false;

// DEFAULT ARGUMENTS IN FUNCTIONS
const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER}, or ${SCISSORS}?`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid pick, so we chose ${DEFAULT_USER_CHOICE} for you`);
    // return DEFAULT_USER_CHOICE;
    return; // DEFAULT ARGUMENT 
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

// ARROW FUNCTION - another way to write functions (=>)
const getWinner = (cChoice, pChoice = DEFAULT_USER_CHOICE) => 
  // no 'function' keywork. ALWAYS on the right side of the '=' sign.
  cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WINS
    : RESULT_COMPUTER_WINS;

  // if (cChoice === pChoice) {
  //   return RESULT_DRAW;
  // } else if (
  //   (cChoice === ROCK && pChoice === PAPER) ||
  //   (cChoice === PAPER && pChoice === SCISSORS) ||
  //   (cChoice === SCISSORS && pChoice === ROCK)
  // ) {
  //   return RESULT_PLAYER_WINS;
  // } else {
  //   return RESULT_COMPUTER_WINS;
  // }


startGameBtn.addEventListener('click', () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerChoice = getPlayerChoice(); // UNDEFINED IN DEFAULT ARGUMENT EXAMPLE
  const computerChoice = getComputerChoice();
  let winner; // DEFAULT ARGUMENT
  if (playerChoice) { // DEFAULT ARGUMENT
    winner = getWinner(computerChoice, playerChoice); // DEFAULT ARGUMENT
  } else { // DEFAULT ARGUMENT
    winner = getWinner(computerChoice, playerChoice); // DEFAULT ARGUMENT
  } // DEFAULT ARGUMENT
    // const winner = getWinner(computerChoice, playerChoice);
  let message = `You picked ${playerChoice || DEFAULT_USER_CHOICE}, computer picked ${computerChoice}. You `;
  if (winner === RESULT_DRAW) {
    message = message + 'had a draw.';
  } else if (winner === RESULT_PLAYER_WINS) {
    message = message + 'won!';
  } else {
    message = message + 'lost!';
  } 
  alert(message);
  console.log(message);
  gameIsRunning = false;
});

// // NOTES FOR CONSIDERATION USING FUNCTIONS AND MAKING THE GAME

// const startGameBtn = document.getElementById('start-game-btn');

// // function declaration => registered at load in global scope.
// function startGame() {
//   console.log('Game is starting...')
// }

// // // FUNCTIONS ARE OBJECTS!!!

// // */*/* ANONYMOUS FUNCTIONS TECHNICALLY DO NOT NEED NAMES *\*\*

// // // Can store a function in variable or const and must call the variable/const name to access.
// // // Being used as an EXPRESSION in this case NOT a declaration.
// // // JS will not register this function as it does normlly.
// // // Remove the function name 'startGame' makes it ANONYMOUS => [const start = function() {...]
// // const start = function startGame() {
// //   console.log('Game is starting...')
// // }; // NEED semi-colon when used as an expression BUT not when used as a declaration.

// // startGameBtn.addEventListener('click', start);

// // CAN BE WRITTEN AS THE FOLLOWING IF ONLY USING ONCE OR A LIMITED NUMBER OF TIMES:
// startGameBtn.addEventListener('click', function() {
//   console.log('Game is starting...');
// });

// // NOTE: May need to add name to make error function easier to identify.
// // startGameBtn.addEventListener('click', function startGame() {
// //   console.log('Game is starting...', age); // Note additional parameter throws error
// // });

// // // function (greet:) stored inside an object => is a METHOD!! STORED IN THE HEAP
// // const person = {
// //   // property => stored value = variable inside an object.
// //   name: 'Max',
// //   // greet: is a property inside a function in this case.
// //   greet: function greet() {
// //     console.log('Hello there!');
// //   }
// // }

// // person.greet();

// // // console.log(typeof startGame);
// // console.dir(startGame); // proves functions are objects themselves AND have their own type!
// // INDIRECT CALL FOR THIS FUNCTION
// // startGameBtn.addEventListener('click', startGame);

// // */*/* NOTES *\*\*

// // Function Declaration
//   // => hoisted without issue
//   // => can be declared anywhere in the file.

// // Function Expression
//   // => hoisted but not initialized - CONST is hoisted.
//   // => can't be declared anywhere in the file.
//   // => MUST BE DEFINED BEFORE BEING CALLED.

// There are 3 ways to create functions!

// 1st way:

// function startGame() {
//   console.log('Game is starting...')
// }

// 2nd way:

// const start = function startGame() {
//   console.log('Game is starting...')
// }; // NEED semi-colon when used as an expression BUT not when used as a declaration.

// startGameBtn.addEventListener('click', start);

// 3rd way:

// startGame = ()  => {
//   console.log('Game is starting...')
// }


// /*/*/* NOT RELATED TO THE GAME *\*\*\

// REST OPERATOR takes all objesct and merges them into the current parameter list inside of the function.
// Must ALWAYS be last formal parameter in the list.
// const sumUp = (...numbers) => { // This is the REST OPERATOR. Similar to the spread operator.
//   let sum = 0;
//   for (const num of numbers) { // for-of loop
//     sum += num;
//   }
//   return sum;
// };

// Before the rest operator (...variableName), had to use the format below with 'arguments' keyword.
// No longer preferred or used much, but may still see it. DO NOT USE IT!!! Haha!!
const subtractUp = function() { // ONLY when using the'function' keyword...
  let sum = 0;
  for (const num of arguments) { // ...can use the 'arguments' keyword. *We do not define it.
    sum -= num;
  }
  return sum;
}

// console.log(sumUp(1, 5, 10, -3, 6, 10));
// console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
// console.log(subtractUp(1, 10, 15, 20));


// Function inside a function
// 'validateNumber is ONLY available inside this function
// const sumUp = (...numbers) => { 
//   const validateNumber = (number) => { // 2nd function will add '0' if parameter isNaN.
//     return isNaN(number) ? 2 : number;
//   };

//   let sum = 0;
//   for (const num of numbers) {
//     sum += validateNumber(num);
//   }
//   return sum;
// };

// console.log(sumUp(1, 5, 10, -3, 'abcd', 6, 10));
// console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
// console.log(subtractUp(1, 10, 15, 20));


// CALLBACK FUNCTIONS - called for you by something else. 
// You cannot execute it manually.
// Built on our own.

const sumUp = (resultHandler, ...numbers) => { 
  const validateNumber = (number) => { 
    return isNaN(number) ? 2 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    sum += validateNumber(num);
  }
  resultHandler(sum);
};

const showResult = (result) => {
  alert('The result is: ' + result);
};

sumUp(showResult, 1, 5, 10, -3, 'abcd', 6, 10);
sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
console.log(subtractUp(1, 10, 15, 20));
