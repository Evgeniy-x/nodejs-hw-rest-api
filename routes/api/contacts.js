const express = require("express");
const contacts = require("../../models/contacts");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(contacts);
});

router.get("/:contactId", async (req, res, next) => {
  function getById(id) {}
  res.json({ message: "template messageID" });
});

router.post("/", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.delete("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

router.put("/:contactId", async (req, res, next) => {
  res.json({ message: "template message" });
});

module.exports = router;
