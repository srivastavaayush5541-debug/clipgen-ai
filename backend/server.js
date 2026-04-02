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
    razorpayReady: !!process.env.RAZORPAY_KEY_ID,
    timestamp: new Date().toISOString()
  });
});

// ✅ FIXED RAZORPAY ORDER API - TOP LEVEL ROUTE
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;
    
    console.log('📥 Amount received:', amount);
    
    if (!amount || isNaN(amount) || amount <= 0) {
      console.log('❌ Invalid amount:', amount);
      return res.status(400).json({ error: 'Valid positive number amount required' });
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error('❌ Razorpay env vars missing');
      return res.status(500).json({ error: 'Razorpay not configured (check Render dashboard)' });
    }

    const Razorpay = require('razorpay');
    
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const amountInPaise = Math.round(Number(amount) * 100);
    
    console.log(`💳 Creating Razorpay order: ₹${amount} = ${amountInPaise} paise`);

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: 'INR',
      receipt: `clipgen_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    });

    console.log('✅ Order created successfully:', order.id);

    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: order.status
    });

  } catch (error) {
    console.error('💥 Razorpay Error Details:');
    console.error('- Message:', error.message);
    console.error('- Code:', error.code);
    console.error('- Status:', error.statusCode);
    console.error('- Description:', error.description);
    
    res.status(500).json({ 
      error: 'Order creation failed',
      message: error.message,
      code: error.code,
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
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
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`💳 Razorpay: POST /create-order {amount: 500}`);
  console.log(`🤖 OpenAI: POST /generate {prompt: '...'} `);
  console.log(`🔍 Health: GET /`);
});

module.exports = app;

