console.clear();

const userElement = document.querySelector(".user");
const errorMessage = document.querySelector(".error");

async function getUser(url) {
  const response = await fetch(url);

  if (!response.ok) {
    console.log("Network response: ", response.ok);
    return null;
  }

  try {
    const json = await response.json();
    return json.data;
  } catch (error) {
    console.log("NO JSON!!!", error);
    errorMessage.textContent = error;
    return null;
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    try {
      userElement.innerHTML = `
<h2>${user.first_name} ${user.last_name}</h2>
<img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
`;
    } catch (error) {
      errorMessage.textContent = error;
    }
  })
);
