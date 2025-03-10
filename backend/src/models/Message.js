const pool = require("../db/index");  // ✅ Use the PostgreSQL connection pool

// ✅ Function to create the `messages` table (Runs automatically)
async function createMessagesTable() {
  const query = `
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      groupName VARCHAR(255) NOT NULL,
      sender VARCHAR(255) NOT NULL,
      text TEXT NOT NULL,
      timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log("✅ Messages table is ready.");
  } catch (err) {
    console.error("❌ Error creating messages table:", err);
  }
}

// ✅ Ensure the messages table exists
createMessagesTable();

// ✅ Function to insert a new message
async function addMessage(groupName, sender, text) {
  const query = `INSERT INTO messages (groupName, sender, text) VALUES ($1, $2, $3) RETURNING *`;
  const values = [groupName, sender, text];

  try {
    const result = await pool.query(query, values);
    return result.rows[0];
  } catch (err) {
    console.error("❌ Error inserting message:", err);
    throw err;
  }
}

// ✅ Function to fetch messages by group name
async function getMessagesByGroup(groupName) {
  const query = `SELECT * FROM messages WHERE groupName = $1 ORDER BY timestamp ASC`;
  
  try {
    const result = await pool.query(query, [groupName]);
    return result.rows;
  } catch (err) {
    console.error("❌ Error retrieving messages:", err);
    throw err;
  }
}

module.exports = { addMessage, getMessagesByGroup };
