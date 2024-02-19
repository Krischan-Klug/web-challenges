console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
  const response = await fetch(url);
  const json = await response.json();

  return json;
}

await fetchData();

const data = await fetchData();
const dataResults = data.results;

console.log(dataResults);

console.log(dataResults[2].eye_color);
