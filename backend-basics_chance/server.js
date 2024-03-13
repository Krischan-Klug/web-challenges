import { createServer } from "node:http";
import { Chance } from "chance";

const chance = new Chance();

function generateRandomPerson() {
  return {
    name: chance.name(),
    age: chance.age(),
    profession: chance.profession(),
  };
}

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200;

    const randomPerson = generateRandomPerson();
    response.end(
      `Hello, my name is ${randomPerson.name} and I am ${randomPerson.age} years old. I am a ${randomPerson.profession}.`
    );
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
