const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173', 'http://192.168.1.47:5173'],
  credentials: true
}));
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

const guestSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  attending: Boolean,
});

const Guest = mongoose.model("Guest", guestSchema);

app.post("/api/guests", async (req, res) => {
  try {
    const { firstName, lastName, email, attending } = req.body;
    console.log("Received form data:", { firstName, lastName, email, attending });

    // Check if guest already exists
    const existing = await Guest.findOne({ email });
    if (existing) {
      console.log("Guest already exists:", existing);
      return res.status(200).json({ message: "Already registered", guest: existing });
    }

    const newGuest = new Guest({ firstName, lastName, email, attending });
    const savedGuest = await newGuest.save();
    console.log("New guest saved:", savedGuest);

    res.status(201).json({ message: "Guest registered", guest: savedGuest });
  } catch (error) {
    console.error("Error saving guest:", error);
    res.status(500).json({ 
      message: "Error saving guest", 
      error: error.message 
    });
  }
});

app.get("/api/test", (req, res) => {
  res.json({ message: "Server is running!" });
});

app.listen(5000, "0.0.0.0", () =>
  console.log("🚀 Server running on http://0.0.0.0:5000")
);
