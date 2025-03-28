require("dotenv").config();
const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
const pool = require("./db/index");

=======
>>>>>>> 0b3ae43f737b176327c8d8e986159b9b40bb33a6
const coursesRouter = require("./routes/courses");
const authRouter = require("./routes/auth");


const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 5001;

const chatRoutes = require("./routes/chat"); //  Import chat routes
=======
>>>>>>> 0b3ae43f737b176327c8d8e986159b9b40bb33a6

app.use(express.json());
app.use(cors({ origin: "*" })); //  Allow all frontend requests

// Default test route
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

// API Test Route
app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from StudentHUB Backend!" });
});

// Mount the courses router
app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);

<<<<<<< HEAD
// Mount API routes
app.use("/api/chat", chatRoutes); //  Ensures `/api/chat/messages` works

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
=======
// Export app for tests (no .listen call here)
module.exports = app;
>>>>>>> 0b3ae43f737b176327c8d8e986159b9b40bb33a6
