const display = document.getElementById('display');
let firstValue = '';
let operator = '';
let secondValue = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    if (["+", "-", "*", "/"].includes(value)) {
        if (firstValue !== '' && operator === '' && secondValue === '') {
            operator = value;
        }
        // Si l'utilisateur appuie sur un opérateur sans nombre, on ignore
        return;
    }
    if (operator === '') {
        firstValue += value;
        display.value = firstValue;
    } else {
        secondValue += value;
        display.value = secondValue;
    }
}

function clearDisplay() {
    firstValue = '';
    operator = '';
    secondValue = '';
    resultDisplayed = false;
    display.value = '';
}

function calculateResult() {
    if (firstValue === '' || operator === '' || secondValue === '') return;
    const a = parseFloat(firstValue);
    const b = parseFloat(secondValue);
    let result = '';
    if (operator === '/' && b === 0) {
        result = 'Division by zero is not allowed';
    } else if (operator === '+') {
        result = a + b;
    } else if (operator === '-') {
        result = a - b;
    } else if (operator === '*') {
        result = a * b;
    } else if (operator === '/') {
        result = a / b;
    }
    display.value = result;
    resultDisplayed = true;
    // reset pour permettre une nouvelle opération après =
    firstValue = '';
    operator = '';
    secondValue = '';
}

display.value = '';
