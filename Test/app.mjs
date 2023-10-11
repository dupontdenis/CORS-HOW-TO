// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const serverUrl = "http://localhost:5000/api/";

// ---------------------------------------------------------------------------
// API interactions
// ---------------------------------------------------------------------------

async function sendRequest(api, method = "GET", body) {
  try {
    const response = await fetch(serverUrl + api, {
      method: method,
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body,
    });
    return await response.json();
  } catch (error) {
    return { error: error.message || "Unknown error" };
  }
}

async function getAccount(user) {
  if (user) {
    return sendRequest("/" + encodeURIComponent(user));
  } else {
    return { error: "user = dupont" };
  }
}

// ---------------------------------------------------------------------------
// Login/register
// ---------------------------------------------------------------------------

async function login(user) {
  const data = await getAccount(user);

  if (data.error) {
    console.log("iiiii");
  }
  const elet = document.getElementById("app");
  // console.log(elet.textContent);
  elet.innerHTML = `<h1>${data.user} has ${data.balance}€</h1>`;
}

login("dupont");
