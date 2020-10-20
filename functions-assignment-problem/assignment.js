/* Question 1 */
const sayHello = name => console.log('Hi ' + name);
sayHello('Shawn');

/* Question 2 */
const sayHello2 = (name, age) => console.log(name + ' is ' + age);
sayHello2('Robert', 10);

const sayHello3 = () => console.log('My name is John and I am 14 years old.');
sayHello3();

const sayHello4 = name => 'My name is ' + name;
console.log(sayHello4('Bill'));

/* Question 3 */
const sayHello5 = (name, age = 10) => console.log('Hello ' + name + ', you are ' + age);
sayHello5('Amber');
sayHello5('John', 40);

/* Question 4 */
function checkInput(cb, ...data) {
  let hasChars = false;
  for (const text of data) {
    if (!text) {
      hasChars = true;
      break;
    }
  }
  if (!hasChars) {
    cb();
  }
}

checkInput(() => {
  console.log('All not empty'); // If one is empty, message WILL NOT display
}, 
'Get', '12', 'Cat', 'Done'); // message WILL display because NONE are empty





