const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const router = require("./routes");
const { logger } = require("./middleware/logEvents");

// App constants
const port = process.env.PORT || 5000;
const apiPrefix = "/api";

// custom middleware logger

// Create the Express app & setup middlewares
app.use(express.json());

// Cross Origin Resource Sharing
app.use(cors(corsOptions));
// app.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/ }));
// app.options("*", cors());

// ***************************************************************************
app.use(logger);
// Add 'api` prefix to all routes
app.use(apiPrefix, router);

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
