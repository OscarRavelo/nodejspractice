const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.post("messages", (req, res) => {
  console.log("Updating messages....");
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
