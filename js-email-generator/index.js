const form = document.querySelector(".form");

//Debug
//console.log("FORM:" + form);

function generateEmail(userToAdd) {
  let firstName = userToAdd.firstName;
  let lastName = userToAdd.lastName;

  return firstName + "." + lastName + "@yourmail.com";

  // function implementation
}

const newUser = {
  firstName: "Jane",
  lastName: "Doe",
};

function getUserFromEmail(email) {
  if (email.includes("@")) {
    let splitedEmail;

    splitedEmail = email.split("@");

    //console.log(splitedEmail);

    if (splitedEmail[0].includes(".")) {
      splitedEmail = splitedEmail[0].split(".");

      generatedFirstName = splitedEmail[0];
      generatedLastName = splitedEmail[1];

      const generatedName = {
        firstName: "",
        lastName: "",
      };

      generatedName.firstName = generatedFirstName;
      generatedName.lastName = generatedLastName;

      return generatedName;

      console.log(splitedEmail);
    } else {
      return null;
    }
  } else {
    return null;
  }
}

//Debug
/* const email = generateEmail(newUser);
console.log("Generated E-mail: " + email);

const namesObject = getUserFromEmail(email);
console.log(namesObject); */

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const output = document.querySelector("data-js=generated-email");

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  let result = generateEmail(data);
  output.innerHTML = output;
  console.log(result);
});
