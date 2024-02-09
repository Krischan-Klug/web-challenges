console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

currentTime = new Date().getHours();
currentWeekDay = new Date().getDay();
console.log(currentWeekDay);

function getGreeting() {
  if (new Date().getHours() > 6 && new Date().getHours() < 12) {
    return "Good Morning";
  }
  if (new Date().getHours() > 13 && new Date().getHours() < 18) {
    return "Good Afternoon";
  }
  if (new Date().getHours() > 19 && new Date().getHours() < 22) {
    return "Good Evening";
  }
  if (new Date().getHours() > 23 && new Date().getHours() < 5) {
    return "Good Night";
  }

  // Code here
}

function getDayColor() {
  if (currentWeekDay === 1) {
    return "darkgrey";
  }
  if (
    currentWeekDay === 2 ||
    currentWeekDay === 3 ||
    currentWeekDay === 4 ||
    currentWeekDay === 5
  ) {
    return "lightblue";
  }
  if (currentWeekDay === 6 || currentWeekDay === 7) {
    return hotpink;
  }

  // Code here
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
