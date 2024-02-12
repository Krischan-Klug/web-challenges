/*

Important: Create a fork for each sub challenge!
Implement the following functionality:

1. On button click: The value of the first input field is copied into the second input field

2. On button click: The value of the first input field is copied in uppercase into the second input field

3. On button click: The values of the two input fields switch.

*/

const firstInput = document.querySelector("[data-js=first-input]");
const secondInput = document.querySelector("[data-js=second-input]");
const button = document.querySelector("[data-js=button]");

let jobIndex = 0;

button.addEventListener("click", (event) => {
  if (jobIndex === 0) {
    secondInput.value = firstInput.value;
    jobIndex = jobIndex + 1;
    console.log(jobIndex);
    return;
  }
  if (jobIndex === 1) {
    secondInput.value = firstInput.value.toUpperCase();
    jobIndex = jobIndex + 1;
    console.log(jobIndex);
    return;
  }
  if (jobIndex === 2) {
    let tempFirst = firstInput.value;
    let tempSecond = secondInput.value;
    firstInput.value = tempSecond;
    secondInput.value = tempFirst;
    jobIndex = jobIndex + 1;
    console.log(jobIndex);
    return;
  }
  if (jobIndex === 3) {
    firstInput.value = null;
    secondInput.value = null;
    jobIndex = 0;
    console.log(jobIndex);
  }
});
