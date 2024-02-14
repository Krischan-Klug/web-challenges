console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

function createMessage(message) {
  const newLiItem = document.createElement("li");
  newLiItem.textContent = message;

  newLiItem.classList.add("toast-container__message");

  toastContainer.appendChild(newLiItem);

  console.log(newLiItem.textContent);
}

addButton.addEventListener("click", () => {
  createMessage("test");
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
  // Exercise: Clear the stack of toast messages
});
