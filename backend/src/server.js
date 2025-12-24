// src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const authRouter = require("./routes/auth");
const deparmtentRouter = require("./routes/departments");
const schedulesRouter = require("./routes/schedules"); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Default route
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

// API Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from StudentHUB Backend!" });
});

// Mount the courses router
app.use("/api/auth", authRouter);
app.use("/api/departments",deparmtentRouter);
app.use("/api/schedules", schedulesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
