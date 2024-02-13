console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

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
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  /*
  //get states from inputs
  const additionInputState = document.querySelector(
    '[data-js="addition"]'
  ).checked;

  const subtractionInputState = document.querySelector(
    '[data-js="subtraction"]'
  ).checked;

  const multiplicationInputState = document.querySelector(
    '[data-js="multiplication"]'
  ).checked;

  const divisionInputState = document.querySelector(
    '[data-js="addition"]'
  ).checked;
*/
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  let numberA = data.numberA;
  let numberB = data.numberB;
  let result;

  //Debug
  console.log(data);
  console.log(data.operator);
  console.log(numberA);
  console.log(numberB);

  if (data.operator === "addition") {
    result = add(numberA, numberB);
  }
  if (data.operator === "subtraction") {
    result = subtract(numberA, numberB);
  }

  if (data.operator === "multiplication") {
    result = multiply(numberA, numberB);
  }
  if (data.operator === "division") {
    result = divide(numberA, numberB);
  }

  resultOutput.textContent = result;
});
