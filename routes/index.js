const express = require("express");
const pool = require("../db/pool");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT id, text, username, added FROM messages ORDER BY added DESC"
    );

    res.render("index", { title: "Mini Messageboard", messages: rows });
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    res.status(500).send("Unable to load messages right now.");
  }
});

router.get("/new", (req, res) => {
  res.render("form", { title: "New Message" });
});

router.post("/new", async (req, res) => {
  const { messageUser, messageText } = req.body;
  const username = messageUser ? messageUser.trim() : "";
  const text = messageText ? messageText.trim() : "";

  if (!username || !text) {
    res.status(400).send("Username and message text cannot be empty.");
    return;
  }

  try {
    await pool.query("INSERT INTO messages (text, username) VALUES ($1, $2)", [
      text,
      username,
    ]);
  } catch (error) {
    console.error("Failed to insert message:", error);
    res.status(500).send("Unable to save your message right now.");
    return;
  }

  res.redirect("/");
});

router.get("/message/:id", async (req, res) => {
  const messageId = Number(req.params.id);

  if (!Number.isInteger(messageId)) {
    res.status(400).send("Invalid message id.");
    return;
  }

  try {
    const { rows } = await pool.query(
      "SELECT id, text, username, added FROM messages WHERE id = $1",
      [messageId]
    );

    const message = rows[0];

    if (!message) {
      res.status(404).send("Message not found");
      return;
    }

    res.render("message", { title: "Message Detail", message: message });
  } catch (error) {
    console.error("Failed to fetch message:", error);
    res.status(500).send("Unable to load this message right now.");
    return;
  }
});

module.exports = router;
