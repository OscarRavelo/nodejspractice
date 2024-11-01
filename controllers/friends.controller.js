function postFriends(req, res) {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  const Newfriend = {
    id: friends.length + 1,
    name: req.body.name,
  };
  friends.push(Newfriend);
  res.send(Newfriend);
}

function getFriends(req, res) {
  res.send(friends);
}

module.exports = {
  postFriends,
  getFriends,
};
