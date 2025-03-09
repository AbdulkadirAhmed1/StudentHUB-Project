const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const OpenAI = require('openai');

const upload = multer({ dest: 'uploads/' });

// ✅ ADD THIS TEST GET ROUTE
router.get("/", (req, res) => {
  res.json({ message: "Advising API is working!" });
});

/**
 * POST /api/advising/upload-pdf
 * 1. Upload a PDF
 * 2. Parse text with pdf-parse
 * 3. Summarize with GPT-4
 * 4. Return summary + raw text
 */
router.post('/upload-pdf', upload.single('pdfFile'), async (req, res) => {
  try {
    const pdfBuffer = fs.readFileSync(req.file.path);
    const data = await pdfParse(pdfBuffer);
    const pdfText = data.text;
    fs.unlinkSync(req.file.path);

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const prompt = `You are an academic advisor. The PDF text is:\n\n${pdfText}\n\nPlease provide a summary of the student's degree progress.`;

    const gptResponse = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }]
    });

    const summary = gptResponse.choices[0].message.content.trim();

    res.json({ success: true, summary, pdfText });
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