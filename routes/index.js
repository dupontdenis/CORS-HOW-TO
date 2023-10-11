const express = require("express");
const ctrlAccount = require("../controlers/account.js");

// Configure routes
const router = express.Router();

// ------------------ACCOUNTS_USER----------------------------
router
  .route("/:user")

  // Get all data for the specified account
  .get(ctrlAccount.getUserAccount);

module.exports = router;
