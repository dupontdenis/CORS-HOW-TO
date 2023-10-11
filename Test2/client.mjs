let client;

export default async () => {
  const url = "http://localhost:5000/api/dupont";
  const response = await fetch(url);
  client = await response.json();
  console.log(client);
};

export { client };
