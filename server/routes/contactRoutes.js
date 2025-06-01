const express = require("express");
const router = express.Router();
const { createContact, getAllContacts } = require("../controller/contactController");

// POST /api/contacts
router.post("/contacts", createContact);

// GET /api/contacts
router.get("/contacts", getAllContacts);

module.exports = router;
