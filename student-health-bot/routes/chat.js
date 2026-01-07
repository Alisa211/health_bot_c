const express = require("express");
const pool = require("../db");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Chat route working" });
});

/**
 * POST /api/chat/ask
 * Protected
 */
router.post("/ask", authMiddleware, async (req, res) => {
  try {
    const { question } = req.body;
    const userId = req.user.userId;

    // 1. Validate input
    if (!question || question.trim().length < 5) {
      return res.status(400).json({
        error: "Question must be at least 5 characters long",
      });
    }

    // 2. Save question
    const [questionResult] = await pool.query(
      "INSERT INTO questions (user_id, question_text) VALUES (?, ?)",
      [userId, question]
    );

    const questionId = questionResult.insertId;

    // 3. Generate bot response (TEMP RULE-BASED)
    const { responseText, severity } = generateBotResponse(question);

    // 4. Save response
    await pool.query(
      "INSERT INTO bot_responses (question_id, response_text, severity_level) VALUES (?, ?, ?)",
      [questionId, responseText, severity]
    );

    // 5. Send response
    res.json({
      success: true,
      question: question,
      response: responseText,
      severity,
    });
  } catch (err) {
    console.error("Chat error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

  /**
 * GET /api/chat/history
 * Protected
 * Returns chat history for logged-in user
 */
router.get("/history", authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;

    const [rows] = await pool.query(
      `
      SELECT 
        q.question_id,
        q.question_text,
        q.asked_at,
        r.response_text,
        r.severity_level
      FROM questions q
      LEFT JOIN bot_responses r
        ON q.question_id = r.question_id
      WHERE q.user_id = ?
      ORDER BY q.asked_at DESC
      `,
      [userId]
    );

    res.json({
      success: true,
      count: rows.length,
      history: rows,
    });
  } catch (err) {
    console.error("Chat history error:", err);
    res.status(500).json({ error: "Server error" });
  }
});



/**
 * Simple rule-based response generator
 */
function generateBotResponse(question) {
  const q = question.toLowerCase();

  if (q.includes("suicide") || q.includes("self harm")) {
    return {
      responseText:
        "I’m really sorry you’re feeling this way. You’re not alone. Please consider reaching out to a trusted person or a mental health professional immediately.",
      severity: "critical",
    };
  }

  if (q.includes("pain") || q.includes("bleeding") || q.includes("fever")) {
    return {
      responseText:
        "That sounds uncomfortable. If the symptoms persist or worsen, it would be best to consult a healthcare professional.",
      severity: "warning",
    };
  }

  return {
    responseText:
      "Thanks for sharing. Many health changes can be normal, but if something feels unusual or concerning, seeking professional advice is always a good idea.",
    severity: "normal",
  };
}

module.exports = router;
