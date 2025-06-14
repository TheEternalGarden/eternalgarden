const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/api/oracle', async (req, res) => {
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
        res.json({ reply });
    } catch (err) {
        res.status(500).json({ error: 'OpenAI API error.' });
    }
});

app.listen(port, () => {
    console.log(`Oracle backend listening at http://localhost:${port}`);
}); 