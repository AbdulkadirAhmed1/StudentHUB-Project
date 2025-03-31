const express = require("express");
const router = express.Router();
const pool = require("../db/index");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

const SUPABASE_URL = "https://ajnrpplvtzdfddybzaas.supabase.co";
const SUPABASE_SERVICE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFqbnJwcGx2dHpkZmRkeWJ6YWFzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzI3ODY2MywiZXhwIjoyMDU4ODU0NjYzfQ.8yKzJNEA3DW-AAwkh95G-emKTJ-rLKFHerh9f64xzHc"; // Keep this secure in production

// ✅ GET messages from Supabase
router.get("/messages", async (req, res) => {
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/supabase_messages?select=*&order=timestamp.asc`, {
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Error fetching messages from Supabase:", err);
    res.status(500).json({ error: "Failed to fetch messages" });
  }
});

// ✅ GET user info from local Render PostgreSQL database
router.get("/userinfo", async (req, res) => {
  const { username } = req.query;
  if (!username) return res.status(400).json({ error: "Username required" });

  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const { id, name, yearofstudy, program } = result.rows[0];
    res.json({ id, name, yearofstudy, program });
  } catch (err) {
    console.error("❌ Error fetching user info:", err);
    res.status(500).json({ error: "Failed to fetch user info" });
  }
});

// ✅ POST message to Supabase with user info from Render backend
router.post("/messages", async (req, res) => {
  try {
    const { username, content } = req.body;
    if (!username || !content) {
      return res.status(400).json({ error: "username and content required" });
    }

    // 1️⃣ Fetch user details from local PostgreSQL
    const userRes = await pool.query("SELECT * FROM users WHERE username = $1", [username]);
    const user = userRes.rows[0];
    if (!user) return res.status(404).json({ error: "User not found" });

    const { id, name, yearofstudy, program } = user;

    // 2️⃣ Insert message directly into Supabase
    const insertResponse = await fetch(`${SUPABASE_URL}/rest/v1/supabase_messages`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_SERVICE_KEY,
        Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({
        senderid: id,
        sendername: name,
        senderyear: yearofstudy,
        senderprogram: program,
        content: content,
        timestamp: new Date().toISOString(),
      }),
    });

    const insertResult = await insertResponse.json();
    console.log("✅ Inserted into Supabase:", insertResult);
    res.status(201).json(insertResult[0]);
  } catch (err) {
    console.error("❌ Error posting message:", err);
    res.status(500).json({ error: "Failed to post message" });
  }
});

module.exports = router;