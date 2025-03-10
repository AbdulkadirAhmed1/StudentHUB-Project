/**
 * src/routes/advising.js
 */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const fs = require("fs");
const pdfParse = require("pdf-parse");
const axios = require("axios");
const OpenAI = require("openai"); // from openai@4.x

// Setup multer for PDF uploads
const upload = multer({ dest: "uploads/" });

/**
 * POST /api/advising/upload-pdf
 * 1. Upload a PDF (optional step)
 * 2. Parse text with pdf-parse
 * 3. Summarize with GPT
 * 4. Return summary + raw text
 */
router.post("/upload-pdf", upload.single("pdfFile"), async (req, res) => {
  try {
    // Read the PDF file from disk
    const pdfBuffer = fs.readFileSync(req.file.path);

    // Parse text from PDF
    const data = await pdfParse(pdfBuffer);
    const pdfText = data.text;

    // Remove the uploaded file (optional housekeeping)
    fs.unlinkSync(req.file.path);

    // Summarize PDF content with GPT
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const prompt = `You are an academic advisor. The PDF text is:\n\n${pdfText}\n\nPlease provide a short summary of the student's degree progress.`;

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo"
      messages: [{ role: "user", content: prompt }],
    });

    const summary = gptResponse.choices[0].message.content.trim();

    // Return to frontend
    res.json({
      success: true,
      summary,
      pdfText, // store this for future Q&A
    });
  } catch (error) {
    console.error("Error in /upload-pdf:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * POST /api/advising/ask
 * Provide userQuestion + pdfText, get GPT answer
 * We'll do the snippet approach:
 *   1. Fetch official course data from fetchcourses route
 *   2. Attempt to find the relevant course(s) the user wants
 *   3. Send only that snippet (plus any PDF text) to GPT
 */
router.post("/ask", express.json(), async (req, res) => {
  try {
    const { userQuestion, pdfText = "" } = req.body;

    // Fetch official data from your fetchcourses route
    // Adjust the URL if your server or port is different
    const fetchcoursesURL =
      process.env.FETCH_COURSES_URL || "http://localhost:5001/api/fetchcourses";

    const fetchRes = await axios.get(fetchcoursesURL);
    if (!fetchRes.data.success) {
      throw new Error("Failed to fetch official course data from fetchcourses.");
    }

    const courseData = fetchRes.data.data; // The big JSON object with all courses

    // Try to detect a course code in the user's question, e.g. "EECS 2311"
    // This is a naive example; you might need something more robust.
    // We'll capture "EECS" + 4 digits: e.g. "EECS 2311" => code=2311
    let codeMatch = userQuestion.match(/eecs\s+(\d+)/i);
    let relevantSnippet = "";

    if (codeMatch) {
      const code = codeMatch[1]; // e.g. "2311"
      console.log("Detected course code:", code);

      // Search in the big courseData for an object that has
      // courseObj.key.dept==="eecs" and courseObj.key.code=== code
      let found = null;

      // The structure of courseData is typically:
      // {
      //   "1": [ [ {...}, {...}, ... ], [ ... ] ],
      //   "2": [ [ ... ], [ ... ] ],
      //   ...
      //   "3": [...],
      //   "4": [...]
      // }
      // We need to iterate each level => each array => each array => courseObj
      Object.keys(courseData).forEach((level) => {
        // courseData[level] might be an array of arrays
        // e.g. courseData["1"] => [ [ courseObj1, courseObj2, ... ], [ ... ] ]
        courseData[level].forEach((arr) => {
          arr.forEach((courseObj) => {
            // e.g. courseObj.key = { faculty: 'le', dept: 'eecs', code: '2311', ... }
            if (
              courseObj.key &&
              courseObj.key.dept.toLowerCase() === "eecs" &&
              courseObj.key.code === code
            ) {
              found = courseObj;
            }
          });
        });
      });

      if (found) {
        relevantSnippet = JSON.stringify(found);
      }
    }

    // Build the prompt
    const prompt = `
You are an academic advisor with knowledge of the following official course data:
${relevantSnippet || "(No matching course found)"}

The student's PDF text (optional):
${pdfText}

User's question:
"${userQuestion}"

Please provide an academic advising response, referencing the data if it exists.
If no data was found, do your best with general knowledge but clarify that you have incomplete data.
`;

    // GPT call
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    const answer = gptResponse.choices[0].message.content.trim();

    res.json({ success: true, answer });
  } catch (error) {
    console.error("Error in /ask:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
