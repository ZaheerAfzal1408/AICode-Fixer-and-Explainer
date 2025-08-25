import express from "express";
import fetch from "node-fetch";
const router = express.Router();

router.post("/", async (req, res) => {
  const { code, language } = req.body;
  if (!code) return res.status(400).json({ error: "No code provided." });

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
      data.candidates?.[0]?.content?.[0]?.parts?.[0]?.text ||
      "❌ No explanation returned.";

    res.json({ explanation });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

export default router;
