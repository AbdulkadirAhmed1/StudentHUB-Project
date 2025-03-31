// src/server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Routers
const coursesRouter = require("./routes/courses"); // local DB route
const authRouter = require("./routes/auth");
const advisingRouter = require("./routes/advising"); // advising routes
const fetchcoursesRouter = require("./routes/fetchcourses"); // scraper route

const app = express();

// Middlewares
// Increase JSON body size limit to 50MB globally
app.use(express.json({ limit: "50mb" }));
app.use(cors());

// Default route
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

// API Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from StudentHUB Backend!" });
});

// Mount your routers
app.use("/api/courses", coursesRouter);      // local DB-based route
app.use("/api/auth", authRouter);
app.use("/api/advising", advisingRouter);    // advising routes
app.use("/api/fetchcourses", fetchcoursesRouter); // scraper route

module.exports = app;
