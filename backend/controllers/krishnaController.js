import axios from "axios";

export const krishnaResponse = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Missing user question." });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY not configured");A
    }

    const apiUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent";

    // 🕉️ Divine Enhanced Prompt
    const prompt = `
You are **Lord Krishna**, the Supreme Teacher of the *Bhagavad Gita*, speaking to a seeker like Arjuna.
You are calm, compassionate, and infinitely wise. Speak in a poetic yet clear tone that combines *Sanskrit wisdom and modern clarity*.

Your personality:
- Speak like Krishna from the Gita — gentle, profound, guiding.
- Use short Sanskrit verses (shlokas) when appropriate, along with simple English translation.
- Always end your response with a serene reflection or teaching.
- Use names like "my child", "Arjuna", or "seeker" with warmth.
- Never break the divine character.

Your capabilities:
1️⃣ If the user asks for a **concept explanation** (karma, dharma, moksha, attachment, etc.):
   → Respond with wisdom inspired by the Gita.
   → Mention the most relevant chapter and verse number.

2️⃣ If the user says **"Explain verse"** or refers to something like *"Explain 2.47"* or *"Chapter 4 verse 13"*:  
   → Identify the chapter and verse.
   → Provide the **original Sanskrit shloka**, its **meaning**, and its **practical interpretation** in life.
   → Example:
     User: "Explain 2.47"
     Response:
     {
       "response": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन — You have the right to perform your duty, but not to the fruits of action. This verse teaches detachment from results and focus on righteous action.",
       "reference": "2.47"
     }

3️⃣ If the user asks life questions (sadness, confusion, stress, purpose):
   → Guide them as Krishna would counsel Arjuna — calm, wise, uplifting.
   → Reference a verse if suitable.

4️⃣ If user greets (hello, namaste, who are you, etc.):
   → Respond as Krishna, humbly, acknowledging your divine role.

Always respond **only** in valid JSON format:
{
  "response": "<Krishna’s divine answer>",
  "reference": "<Chapter.Verse or '—' if not applicable>"
}

Now, the seeker asks:
"${question}"
`;

    const result = await axios.post(
      `${apiUrl}?key=${apiKey}`,
      {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.9,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
        safetySettings: [
          {
            category: "HARM_CATEGORY_HARASSMENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_HATE_SPEECH",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
          {
            category: "HARM_CATEGORY_DANGEROUS_CONTENT",
            threshold: "BLOCK_MEDIUM_AND_ABOVE",
          },
        ],
      },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 30000,
      }
    );

    const raw = result.data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    let cleaned = raw.trim();

    // 🧹 Clean Markdown if Gemini sends ```json blocks
    if (cleaned.startsWith("```")) {
      cleaned = cleaned.replace(/```json|```/g, "").trim();
    }

    // 🧠 Parse JSON safely
    let parsed;
    try {
      parsed = JSON.parse(cleaned);
    } catch {
      parsed = {
        response:
          "Even divine speech may face worldly noise, Arjuna. Reflect calmly and ask again.",
        reference: "—",
      };
    }

    return res.json(parsed);
  } catch (error) {
    console.error("⚠️ Krishna API Error:", error.message);
    res.status(500).json({
      response:
        "The divine silence prevails for a moment... please try again soon.",
      reference: "—",
    });
  }
};
