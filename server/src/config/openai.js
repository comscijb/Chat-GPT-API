const OpenAI = require("openai");

module.exports = class openai {
  static configuration() {
    return new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  static textCompletion({ prompt }) {
    return {
      model: "gpt-4.1",
      messages: [
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.5,
      max_tokens: 512
    };
  }
};