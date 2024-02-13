console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  let checkBox = event.target.checked;
  console.log(checkBox);

  if (checkBox) {
    hideTosError();
  } else {
    showTosError();
  }
  /*
  
  if (!checkBox) {
    showTosError();
  }
  if (checkBox) {
    hideTosError;
  }

  */
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let formElements = event.target.elements;
  let tosState = formElements.tos.checked;

  // --v-- write your code here --v--
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(tosState);

  if (tosState === false) {
    return;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
