const Contact = require("../models/contact");

// POST: Create new contact/inquiry
const createContact = async (req, res) => {
  try {
    const { name, registrationNumber, email, message } = req.body;

    if (!name || !registrationNumber || !email) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newContact = new Contact({ name, registrationNumber, email, message });
    await newContact.save();

    res.status(201).json({ message: "Inquiry submitted successfully!" });
  } catch (error) {
    console.error("Contact submission failed:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET: Fetch all inquiries (for admin)
const getAllContacts = async (_req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: "Unable to fetch inquiries" });
  }
};

module.exports = {
  createContact,
  getAllContacts,
};
