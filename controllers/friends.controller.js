const model = require("../models/friends.model.js");
function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  const Newfriend = {
    id: model.length + 1,
    name: req.body.name,
  };
  model.push(Newfriend);
  res.send(Newfriend);
}

function getFriends(req, res) {
  res.send(model);
}

module.exports = {
  postFriends,
  getFriends,
};
