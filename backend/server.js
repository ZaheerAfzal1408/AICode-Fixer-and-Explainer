import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// import fetch from "node-fetch";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Explain Code endpoint
app.post("/api/explain", async (req, res) => {
  const { code, language } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided." });
  }

  try {
    // Use Gemini API or any other AI API
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Explain the following ${language} code step by step in simple terms:\n\n${code}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const explanation =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "❌ No explanation returned.";

    res.json({ explanation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

// Fix Code endpoint
app.post("/api/fix", async (req, res) => {
  const { code, language } = req.body;

  if (!code) {
    return res.status(400).json({ error: "No code provided." });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Fix the bugs in the following ${language} code and return only the corrected code (no explanation or extra text):\n\n${code}`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await response.json();

    const fixedCode =
      data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
      "❌ No fixed code returned.";

    res.json({ fixedCode });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});


// Test endpoint to make sure backend works
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
