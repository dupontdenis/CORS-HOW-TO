import { client } from "./client.mjs";

function render(client) {
  if (!client) {
    throw "The user is not available";
  }

  const transactions = client.transactions;

  const maxTransaction = transactions.reduce((acc, cur) => {
    if (Math.abs(cur.amount) > Math.abs(acc.amount)) acc = cur;

    return acc;
  });

  return `<div>
  <h1>Client: ${client.user} </h1>
  <p>balance: ${client.balance}€
  <p style="color:red">transaction: ${maxTransaction.amount}
  </div>`;
}
let container = document.querySelector("#app");
container.innerHTML = render(client);
