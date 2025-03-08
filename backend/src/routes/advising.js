// src/routes/advising.js

const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');

// Debug logs to confirm the new library
console.log("DEBUG: require('openai') =>", require('openai'));

// Import the new OpenAI class from openai@4.x
const OpenAI = require('openai');
console.log("DEBUG: OpenAI =>", OpenAI);

// Setup multer for PDF uploads
const upload = multer({ dest: 'uploads/' });

/**
 * POST /api/advising/upload-pdf
 * 1. Upload a PDF
 * 2. Parse text with pdf-parse
 * 3. Summarize with GPT-4
 * 4. Return summary + raw text
 */
router.post('/upload-pdf', upload.single('pdfFile'), async (req, res) => {
  try {
    // 1️⃣ Read the PDF file from disk
    const pdfBuffer = fs.readFileSync(req.file.path);

    // 2️⃣ Parse text from PDF
    const data = await pdfParse(pdfBuffer);
    const pdfText = data.text;

    // 3️⃣ Remove the uploaded file to free space (optional)
    fs.unlinkSync(req.file.path);

    // 4️⃣ Summarize PDF content with GPT-4
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY // from .env
    });

    const prompt = `You are an academic advisor. The PDF text is:\n\n${pdfText}\n\nPlease provide a summary of the student's degree progress.`;

    // New call for openai@4.x: chat.completions.create
    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4", // or "gpt-3.5-turbo" if you don't have GPT-4
      messages: [{ role: "user", content: prompt }]
    });

    // gptResponse.choices[0].message.content contains the summary
    const summary = gptResponse.choices[0].message.content.trim();

    // 5️⃣ Send the summary back to the frontend
    res.json({
      success: true,
      summary,
      pdfText // optionally return the raw PDF text
    });
  } catch (error) {
    console.error("Error in /upload-pdf:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

/**
 * POST /api/advising/ask
 * Provide userQuestion + pdfText, get a GPT-4 advising answer
 */
router.post('/ask', express.json(), async (req, res) => {
  try {
    const { userQuestion, pdfText } = req.body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const prompt = `PDF Content:\n${pdfText}\n\nUser's Question: ${userQuestion}\nPlease provide a thorough academic advising response.`;

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });

    const answer = gptResponse.choices[0].message.content.trim();
    res.json({ success: true, answer });
  } catch (error) {
    console.error("Error in /ask:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
