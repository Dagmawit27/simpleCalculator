const display = document.getElementById("display");
let currentInput = "0";
let operator = null;
let firstOperand = null;

function updateDisplay() {
  display.textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === "0") currentInput = "";
  currentInput += number;
  updateDisplay();
}

function appendDot() {
  if (!currentInput.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function appendOperator(op) {
  if (operator !== null) calculate();
  firstOperand = parseFloat(currentInput);
  operator = op;
  currentInput = "0";
}

function clearDisplay() {
  currentInput = "0";
  operator = null;
  firstOperand = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function calculate() {
  if (operator === null || firstOperand === null) return;
  const secondOperand = parseFloat(currentInput);
  switch (operator) {
    case "+": currentInput = firstOperand + secondOperand; break;
    case "-": currentInput = firstOperand - secondOperand; break;
    case "*": currentInput = firstOperand * secondOperand; break;
    case "/": currentInput = firstOperand / secondOperand; break;
  }
  currentInput = currentInput.toString();
  operator = null;
  firstOperand = null;
  updateDisplay();
}

document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});
