const express = require("express");
const router = express.Router();
const {
  createAppointment,
  getAppointments,
} = require("../controller/appointmentController");

router.post("/appointments", createAppointment);
router.get("/appointments", getAppointments);

module.exports = router;
