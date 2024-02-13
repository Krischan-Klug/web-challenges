console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  const calcAgeBadness =
    event.target.elements.age.value + event.target.elements.badness.value;

  console.log(
    "The age-badness-sum of " +
      event.target.elements.firstName +
      " is " +
      calcAgeBadness
  );

  console.log(data);
  event.target.reset();
  event.target.elements.firstName.focus();
});
