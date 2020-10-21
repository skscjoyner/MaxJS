const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
	return parseInt(userInput.value);
	// can use '+userInput.value', but this can be easily overrlooked or confusing.
	// 'parseInt()' and 'parseFloat()" are more descriptive.
	// parseInt is whole numbers.
	// pasreFloat is decimal numbers.
	// .toString() changes input to a string.
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
	const calcDescription = `${resultBeforeCalc}  ${operator} ${calcNumber}`;
	outputResult(currentResult, calcDescription); // from vendor files
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult
) {
    const logEntry = {
		operation: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.log(logEntry.operation); // ADD
	console.log('Entered number array', logEntries); // arrays
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    if (
        calculationType !== 'ADD' && 
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' && 
        calculationType !== 'DIVIDE' ||
        !enteredNumber // works because 0 is false/falsy
    ) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;

    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+'
    } else if ( calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
	writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    // const enteredNumber = getUserNumberInput();
	// const initialResult = currentResult;
	// currentResult += enteredNumber;
    // createAndWriteOutput('+', initialResult, enteredNumber);
    // writeToLog('ADD', initialResult, enteredNumber, currentResult);
    calculateResult('ADD');
}

function subtract() {
    // const enteredNumber = getUserNumberInput();
	// const initialResult = currentResult;
	// currentResult -= enteredNumber;
    // createAndWriteOutput('-', initialResult, enteredNumber);
    // writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
	calculateResult('SUBTRACT');
}

function multiply() {
    // const enteredNumber = getUserNumberInput();
	// const initialResult = currentResult;
	// currentResult *= enteredNumber;
    // createAndWriteOutput('*', initialResult, enteredNumber);
    // writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
    calculateResult('MULTIPLY');
}

function divide() {
	// const enteredNumber = getUserNumberInput();
	// const initialResult = currentResult;
	// currentResult /= enteredNumber;
    // createAndWriteOutput('/', initialResult, enteredNumber);
    // writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
    calculateResult('DIVIDE');
}

// currentResult = add(1, 2);

// // template literal notation '`${defaultResult}`'
// let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;


// */*/* BIND FUNCTIONALITY *\*\*
function calculate(operation) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let operator;
    if (operation === "ADD") {
        currentResult += enteredNumber;
        operator = '+';
    } else if (operation === 'SUBTRACT') {
        currentResult -= enteredNumber;
        operator = '-';
    } else if (operation === 'MULTIPLY') {
        currentResult *= enteredNumber;
        operator = '*';
    } else {
        currentResult /= enteredNumber;
        operator = '/';
    }
    createAndWriteOutput(operator, initialResult, enteredNumber); // Could use 'operation' for alpha output.
    writeToLog(operation, initialResult, enteredNumber, currentResult);
};

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));

// */*/* END BIND FUNCTIONALITY *\*\*

// addBtn.addEventListener('click', add);
// subtractBtn.addEventListener('click', subtract);
// multiplyBtn.addEventListener('click', multiply);
// divideBtn.addEventListener('click', divide);


// /\/\/\/\  NOTES  /\/\/\/\/\

// Shorthand operators

//  Perform calculation and reassign result to a variable
// += - plus equal
// -= - minus equal
// *= - times equal
// /= - divide equal

// Increment / Decrement variable value and reassign
// ++ - increment by 1
// -- - decrement by 1

// % -  (modulus) returns the remainder of two divided numbers
// ** - exponentiation (exponent notation)
// currentValue++ - returns the value of the variable before the change
// ++currentValue - returns the added value before the change.


// SPECIAL VALUES
// UNDEFINED - default value of initialized variables.
//     Do not assign as a value manually.UNDEFINED

// NULL - Never assumed by default. Must be assigned if you want to 'reset' / 'clear a variable'

// NaN - not a number. Is not its own typeof. Invalid calculation.
