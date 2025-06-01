const express = require("express");
const cors = require("cors");
const connectDb = require("./utils/db");

const appointmentRoutes = require("./routes/appointmentRoutes");
const contactRoutes = require("./routes/contactRoutes");
const blogRoutes = require("./routes/blogRoutes");
const galleryRoutes = require("./routes/galleryRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// API Routes

app.use("/api", appointmentRoutes);
app.use("/api", contactRoutes);
app.use("/api", blogRoutes);
app.use("/api", galleryRoutes);

// Default route
app.get("/", (_req, res) => {
  res.send("✅ CAIS AI Society Backend is running.");
});

// Connect to DB and start server
connectDb()
  .then(() => {
    console.log("✅ Database connected successfully");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection error:", err.message);
    process.exit(1);
  });
