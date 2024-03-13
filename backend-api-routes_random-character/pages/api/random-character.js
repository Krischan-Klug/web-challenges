import Chance from "chance";

const chance = new Chance();

function getRandomCharacter() {
  return {
    firstName: chance.first(),
    lastName: chance.last(),
    email: chance.email(),
  };
}

export default function handler(req, res) {
  res.status(200).json(getRandomCharacter());
}
