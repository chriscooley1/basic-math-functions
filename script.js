function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function square(x) {
    return multiply(x, x);
}

function addSquares(x, y) {
    return add(square(x), square(y));
}

function performAddition() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = add(number1, number2);
    displayResult(result);
}

function performMultiplication() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = multiply(number1, number2);
    displayResult(result);
}

function performSquare() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const result = square(number1);
    displayResult(result);
}

function performAddSquares() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const result = addSquares(number1, number2);
    displayResult(result);
}

function displayResult(result) {
    document.getElementById('result').innerText = `Result: ${result}`;
}
