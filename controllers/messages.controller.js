function getMessages(req, res) {
  res.send("example message");
}

function postMessage(req, res) {
  console.log("Updating message");
}

module.exports = {
  getMessages,
  postMessage,
};
