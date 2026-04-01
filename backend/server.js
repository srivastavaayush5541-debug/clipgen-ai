const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Initialize OpenAI
let openai;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  console.log('✅ OpenAI client initialized');
} else {
  console.log('❌ OPENAI_API_KEY missing from .env');
}

// Health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    openaiReady: !!openai,
    timestamp: new Date().toISOString()
  });
});

// ✅ SECURE /generate endpoint
app.post('/generate', async (req, res) => {
  try {
    const { prompt, model = 'gpt-4o-mini' } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt required' });
    }

    if (!openai) {
      return res.status(503).json({ error: 'OpenAI not configured' });
    }

    console.log(`🤖 Generating for prompt: ${prompt.substring(0, 50)}...`);

    const completion = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: "system",
          content: "You are a helpful AI video script writer. Generate concise, engaging scripts for short videos. Include timestamps and scene descriptions."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    const result = completion.choices[0].message.content.trim();

    res.json({
      success: true,
      content: result,
      model,
      usage: completion.usage,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('OpenAI Error:', error.message);
    
    res.status(500).json({
      success: false,
      error: 'Generation failed',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📝 POST /generate with {prompt: "your prompt"}`);
  console.log(`🔍 Health: http://localhost:${PORT}/`);
});

module.exports = app;

