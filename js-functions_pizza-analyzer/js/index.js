console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

let output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  diameter1 = pizzaInput1.value;
  diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);

  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  diameter1 = pizzaInput1.value;
  diameter2 = pizzaInput2.value;
  calculatePizzaGain(diameter1, diameter2);

  // write your code here
});

// Task 1
// define the function calculatePizzaGain here

function calculatePizzaGain(diameter1, diameter2) {
  const pizzaArea1 = (diameter1 / 2) * (diameter1 / 2) * Math.PI;
  const pizzaArea2 = (diameter2 / 2) * (diameter2 / 2) * Math.PI;
  const pizzaGain = ((pizzaArea2 - pizzaArea1) / pizzaArea1) * 100;
  let textContent = Math.round(pizzaGain);
  output = textContent;
}

// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here
