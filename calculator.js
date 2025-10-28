const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) {
    return "Division by 0 not possible";
  }
  return a / b;
};

function calculate(operation) {
  let a = parseFloat(document.getElementById("number1").value);
  let b = parseFloat(document.getElementById("number2").value);
  document.getElementById("result").textContent = operation(a, b);
}

document.getElementById("add").addEventListener("click", () => calculate(add));
document
  .getElementById("subtract")
  .addEventListener("click", () => calculate(subtract));
document
  .getElementById("multiply")
  .addEventListener("click", () => calculate(multiply));
document
  .getElementById("divide")
  .addEventListener("click", () => calculate(divide));
