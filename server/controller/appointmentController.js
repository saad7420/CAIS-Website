const Appointment = require("../models/appointment");

const createAppointment = async (req, res) => {
  try {
    const appointment = new Appointment(req.body);
    await appointment.save();
    res.status(201).json({ message: "Appointment booked", data: appointment });
  } catch (err) {
    res.status(500).json({ error: "Booking failed" });
  }
};

const getAppointments = async (_req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: "Could not fetch appointments" });
  }
};

module.exports = {
  createAppointment,
  getAppointments,
};
