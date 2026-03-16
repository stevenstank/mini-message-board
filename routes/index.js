const express = require("express");

const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", (req, res) => {
  const { messageUser, messageText } = req.body;

  messages.push({
    text: messageText,
    user: messageUser,
    added: new Date(),
  });

  res.redirect("/");
});

router.get("/messages/:id", (req, res) => {
  const messageId = Number(req.params.id);
  const message = messages[messageId];

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("message", { title: "Message Detail", message: message });
});

module.exports = router;
