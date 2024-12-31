const display = document.getElementById('display');
let secondMode = false;

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleSecond() {
    secondMode = !secondMode;
    alert(`2nd mode: ${secondMode ? 'ON' : 'OFF'}`);
}

function useTrig(func) {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) throw new Error('Invalid Input');
        if (func === 'sin') display.value = Math.sin(value);
        if (func === 'cos') display.value = Math.cos(value);
        if (func === 'tan') display.value = Math.tan(value);
    } catch (e) {
        display.value = 'Error';
    }
}

function useLog() {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) throw new Error('Invalid Input');
        display.value = Math.log10(value);
    } catch (e) {
        display.value = 'Error';
    }
}

function useExp() {
    try {
        const value = parseFloat(display.value);
        if (isNaN(value)) throw new Error('Invalid Input');
        display.value = Math.exp(value);
    } catch (e) {
        display.value = 'Error';
    }
}