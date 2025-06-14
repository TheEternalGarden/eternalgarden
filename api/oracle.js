const OpenAI = require("openai");
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function extractAllPdfText(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));
  let allText = '';
  for (const file of files) {
    const filePath = path.join(dir, file);
    const dataBuffer = fs.readFileSync(filePath);
    try {
      const data = await pdfParse(dataBuffer);
      allText += `\n---\n${file}:\n${data.text}\n`;
    } catch (e) {
      allText += `\n---\n${file}:\n[Could not extract text]\n`;
    }
  }
  return allText;
}

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { conversation } = req.body;
  try {
    const docsText = await extractAllPdfText(path.join(__dirname, '../docs'));
    const systemPrompt = {
      role: "system",
      content: `You are the Oracle. Reference the following Eternal Garden documentation when answering questions.\n${docsText}`
    };
    let messages = conversation;
    if (!messages.length || messages[0].role !== "system") {
      messages = [systemPrompt, ...messages];
    }
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
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