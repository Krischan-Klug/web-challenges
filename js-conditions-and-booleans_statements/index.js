console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "yxcyxcyxvyxc";

const receivedPassword = "password1234";

const passwordMatch = SUPER_SECRET_PASSWORD === receivedPassword;

if (!passwordMatch) {
  console.log("Access denied!");
}

if (passwordMatch) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
}

// Part 2: Even / Odd
const number = 7;
let evenOdd = number % 2;

if (evenOdd) {
  console.log("odd");
} else {
  console.log("even");
}

// Part 3: Hotdogs
const numberOfHotdogs = 42;

if (numberOfHotdogs < 5) {
  console.log("2 euro");
}

if (numberOfHotdogs < 100 && numberOfHotdogs > 5) {
  console.log("1.50 euro");
}

if (numberOfHotdogs > 100 && numberOfHotdogs < 1000000) {
  console.log("1 euro");
}

if (numberOfHotdogs > 1000000) {
  console.log("0.10 euro");
}

// Part 4: Daytime
const currentHour = 18;

let checkHour = currentHour > 17 ? "Partytime!!!" : "Still need to learn...";

let statement = "";

statement = checkHour;

console.log(statement);

// Part 5: Greeting
const name = "marc";

let realName = name === "marc" ? "Coach" : name;

const greeting = "Hello " + realName + "!";

console.log(greeting);
