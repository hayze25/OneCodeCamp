function mathOperation(num1, num2, operation) {
    return operation(num1, num2);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

// Using the mathOperation function with different operations
console.log("Addition:", mathOperation(5, 3, add));
console.log("Subtraction:", mathOperation(5, 3, subtract));
console.log("Multiplication:", mathOperation(5, 3, multiply));
console.log("Division:", mathOperation(6, 3, divide));