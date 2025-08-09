const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Sample App!" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    console.log(`Sample app listening on port ${port}`);
  });
}

module.exports = app; // Export for testing
