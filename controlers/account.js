const db = require("../models");

const getUserAccount = (req, res) => {
  if (!req.params.user) {
    return res.status(400).json({ error: "User does not exist" });
  }
  const account = db[req.params.user];

  // Check if account exists
  if (!account) {
    return res.status(404).json({ error: "User does not exist" });
  }
  console.log(account);
  return res.json(account);
};

module.exports = {
  getUserAccount,
};
