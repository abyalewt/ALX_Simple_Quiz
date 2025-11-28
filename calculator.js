// --- 1. Implement Arithmetic Functions ---

/**
 * Performs addition of two numbers.
 * @param {number} number1
 * @param {number} number2
 * @returns {number} The sum of number1 and number2.
 */
function add(number1, number2) {
  return number1 + number2;
}

/**
 * Performs subtraction of two numbers.
 * @param {number} number1
 * @param {number} number2
 * @returns {number} The difference between number1 and number2.
 */
function subtract(number1, number2) {
  return number1 - number2;
}

/**
 * Performs multiplication of two numbers.
 * @param {number} number1
 * @param {number} number2
 * @returns {number} The product of number1 and number2.
 */
function multiply(number1, number2) {
  return number1 * number2;
}

/**
 * Performs division of two numbers.
 * Handles division by zero.
 * @param {number} number1
 * @param {number} number2
 * @returns {number|string} The quotient or an error message if dividing by zero.
 */
function divide(number1, number2) {
  if (number2 === 0) {
    return "Error: Cannot divide by zero";
  }
  return number1 / number2;
}

// --- Utility Function to Handle Input and Display Result ---

/**
 * Reads inputs, performs the calculation using the provided function, and updates the DOM.
 * @param {function} operationFn The arithmetic function to execute (add, subtract, etc.).
 */
function performCalculation(operationFn) {
  // Retrieve input values and ensure they are numbers, defaulting to 0 for empty inputs.
  // Ensure Input Validation: Use parseFloat for correct calculation.
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;

  // Perform the calculation
  const result = operationFn(number1, number2);

  // Display the result
  document.getElementById("calculation-result").textContent = result;
}

// --- 2. Attach Event Listeners ---

document.addEventListener("DOMContentLoaded", () => {
  // Event listener for the Addition button
  document.getElementById("add").addEventListener("click", function () {
    performCalculation(add);
  });

  // Event listener for the Subtraction button
  document.getElementById("subtract").addEventListener("click", function () {
    performCalculation(subtract);
  });

  // Event listener for the Multiplication button
  document.getElementById("multiply").addEventListener("click", function () {
    performCalculation(multiply);
  });

  // Event listener for the Division button
  document.getElementById("divide").addEventListener("click", function () {
    performCalculation(divide);
  });
});
