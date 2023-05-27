function calculate(num1, operation, num2) {
  const validOperations = {'+': add, '-': subtract, '*': multiply, '/': divide};

  return validOperations[operation] ? validOperations[operation](num1, num2) : null;
}

function add(n1, n2) {
  return n1 + n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function divide(n1, n2) {
  return n2 === 0 ? null : n1 / n2;
}
