// src/server.js

require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Existing routers
const coursesRouter = require("./routes/courses");
const advisingRouter = require("./routes/advising");

// NEW route for scraping coursedelta.yorku.dev
// (You’d create this file at src/routes/fetchcourses.js)
const fetchCoursesRouter = require("./routes/fetchcourses");

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
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
app.use("/api/courses", coursesRouter);

// Mount the advising router
app.use("/api/advising", advisingRouter);

// Mount the new fetchcourses router
app.use("/api/fetchcourses", fetchCoursesRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
