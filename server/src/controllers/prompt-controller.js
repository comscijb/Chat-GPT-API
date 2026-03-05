const InputPrompt = require("../models/input-prompt");
const openai = require("../config/openai");

module.exports = {
  async sendText(req, res) {
    try {
      console.log("📥 BODY:", req.body);

      const openAiAPI = openai.configuration();
      const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Prompt vazio" });
      }

      const response = await openAiAPI.chat.completions.create({
        model: "gpt-4.1",
        messages: [
          { role: "user", content: prompt }
        ],
        temperature: 0.5,
        max_tokens: 512
      });

      return res.status(200).json({
        success: true,
        data: response.choices[0].message.content
      });

    } catch (error) {
      console.error("🔥 ERRO OPENAI:", error);

      return res.status(500).json({
        success: false,
        error: error.message || "Erro interno"
      });
    }
  }
};