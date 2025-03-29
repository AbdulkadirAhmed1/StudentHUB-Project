require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const pool = require("./db/index"); // Database connection pool

// Import Routes
const coursesRouter = require("./routes/courses");
const authRouter = require("./routes/auth");
const chatRouter = require("./routes/chat");

const app = express();
const server = http.createServer(app);  // Create HTTP server using Express
const io = socketIo(server, {
  cors: {
    origin: "*",  // Allow all origins (adjust for production)
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }
});

const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(cors({ origin: "*" }));

// Default test route
app.get("/", (req, res) => {
  res.send("StudentHUB Backend is running...");
});

// Mount Routes (including courses, auth, and chat)
app.use("/api/courses", coursesRouter);
app.use("/api/auth", authRouter);
app.use("/api/chat", chatRouter); // Chat routes to handle messages

// Socket.IO connection management
io.on("connection", (socket) => {
  console.log("A user connected with socket ID:", socket.id); // Debugging log

  // Handle new messages from users
  socket.on("new_message", async (newMessage) => {
    console.log("Received new message:", newMessage); // Debugging log

    try {
      const { senderName, senderYear, senderProgram, content } = newMessage;

      // Insert the new message into the database
      const result = await pool.query(
        "INSERT INTO messages (senderName, senderYear, senderProgram, content, timestamp) VALUES ($1, $2, $3, $4, NOW()) RETURNING *",
        [senderName, senderYear, senderProgram, content]
      );

      const savedMessage = result.rows[0]; // Get the saved message
      console.log("Saved message:", savedMessage); // Debugging log

      // Broadcast the message to all connected clients
      io.emit("new_message", savedMessage);
      console.log("Broadcasted new message to all clients."); // Debugging log

    } catch (error) {
      console.error("Error saving message:", error);
    }
  });

  // Handle socket disconnect
  socket.on("disconnect", () => {
    console.log("A user disconnected:", socket.id); // Debugging log
  });

  // Handle errors in socket connection
  socket.on("error", (error) => {
    console.error("Socket error:", error); // Debugging log
  });
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});