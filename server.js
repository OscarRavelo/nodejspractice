const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const friends = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/friends", (req, res) => {
  res.send(friends);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/friends/:id", (req, res) => {
  const friendId = Number(req.params.id);
  console.log(friendId);
  const friend = friends.find((friend) => friend.id === friendId);
  if (!friend) {
    res.status(404).send("Friend not found");
  } else {
    res.send(friend);
  }
});
