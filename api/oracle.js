const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { conversation } = req.body;
  if (!conversation || !Array.isArray(conversation)) {
    return res.status(400).json({ error: 'Invalid conversation format.' });
  }
  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: conversation,
      max_tokens: 500,
    });
    const reply = completion.choices[0].message.content.trim();
    res.status(200).json({ reply });
  } catch (err) {
    console.error('OpenAI API error:', err);
    res.status(500).json({ 
      error: 'OpenAI API error.', 
      details: err.message || err.toString(), 
      stack: err.stack 
    });
  }
}; 