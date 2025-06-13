const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { conversation } = req.body;
  if (!conversation || !Array.isArray(conversation)) {
    return res.status(400).json({ error: 'Invalid conversation format.' });
  }
  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: conversation,
      max_tokens: 500,
    });
    const reply = completion.data.choices[0].message.content.trim();
    res.status(200).json({ reply });
  } catch (err) {
    res.status(500).json({ error: 'OpenAI API error.' });
  }
}; 