import promise, { client } from "./client.mjs";

function render(client) {
  if (!client) {
    throw "The user is not available";
  }

  return `<h1>${client.user} has ${client.balance}€</h1>`;
}

promise().then(() => {
  let container = document.querySelector("#app");
  try {
    container.innerHTML = render(client);
  } catch (error) {
    container.innerHTML = error;
  }
});
