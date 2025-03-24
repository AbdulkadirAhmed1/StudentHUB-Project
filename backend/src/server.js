require("dotenv").config();
const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
const pool = require("./db/index");
const coursesRouter = require("./routes/courses");
=======
const coursesRouter = require("./routes/courses");  // <-- Import our new router
const authRouter = require("./routes/auth");
>>>>>>> 7be5ae309c49b8ba0e58d114567583d29fe3db49

const app = express();
const PORT = process.env.PORT || 5001;

const chatRoutes = require("./routes/chat"); //  Import chat routes

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

// Mount API routes
app.use("/api/chat", chatRoutes); //  Ensures `/api/chat/messages` works

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
