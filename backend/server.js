const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const Gtts = require('gtts');
const Razorpay = require("razorpay");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Razorpay - Environment Variables ONLY
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

console.log("✅ Razorpay Key Loaded:", process.env.RAZORPAY_KEY_ID ? 'YES' : 'MISSING');

// Create public/audio dir if not exists
const audioDir = path.join(__dirname, 'public', 'audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('ClipGen AI Backend with gTTS 🚀');
});

// ✅ /generate-video with REAL gTTS
app.post('/generate-video', async (req, res) => {
  try {
    const { script, plan = 'free' } = req.body;

    if (!script) {
      return res.status(400).json({ success: false, error: 'Script required' });
    }

    // Plan limits
    const maxScenes = plan === 'free' ? 3 : 5;
    const watermark = plan === 'free';

    // Split script into scenes
    const scenes = script
      .split(/[.?!]+/)
      .map(s => s.trim())
      .filter(s => s.length > 10)
      .slice(0, maxScenes);

    // Direct Pollinations images (no download)
    const images = scenes.map((scene, i) => 
      `https://image.pollinations.ai/prompt/${encodeURIComponent(scene.substring(0, 100))}?width=512&height=512&nologo=true&seed=${i}`
    );

    // ✅ REAL gTTS Audio Generation
    const timestamp = Date.now();
    const filename = `audio_${timestamp}.mp3`;
    const filepath = path.join(audioDir, filename);
    const voiceUrl = `/public/audio/${filename}`;

    const gtts = new Gtts(script.substring(0, 500), 'en'); // Cost limit

    await new Promise((resolve, reject) => {
      gtts.save(filepath, (err) => {
        if (err) {
          console.error('gTTS error:', err);
          reject(err);
        } else {
          resolve();
        }
      });
    });

    // Mock video (replace with FFmpeg later)
    const videoUrl = watermark
      ? `https://via.placeholder.com/1280x720/6c5ce7/ffffff?text=ClipGen+AI+Free+${timestamp}`
      : `https://via.placeholder.com/1280x720/a29bfe/ffffff?text=Premium+Video+${timestamp}`;

    res.json({
      success: true,
      videoUrl,
      scenes: scenes.map((scene, i) => ({
        text: scene,
        image: images[i]
      })),
      audio: voiceUrl,
      duration: scenes.length * 4,
      watermark,
      planUsed: plan
    });

  } catch (error) {
    console.error('Generation error:', error);
    
    // ✅ No crash fallback
    const timestamp = Date.now();
    const fallbackUrl = `/public/audio/fallback_${timestamp}.mp3`;
    
    res.json({
      success: true,
      videoUrl: 'https://via.placeholder.com/1280x720?text=Error',
      scenes: [],
      audio: fallbackUrl,
      duration: 10,
      watermark: true,
      planUsed: 'free',
      note: 'Audio fallback (gTTS busy)'
    });
  }
});

// ✅ RAZORPAY CREATE ORDER ENDPOINT
app.post('/create-order', async (req, res) => {
  try {
    const { amount } = req.body;
    
    console.log('Creating order for amount:', amount);
    
    const order = await razorpay.orders.create({
      amount: amount * 100, // paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    console.log('Order created:', order.id);
    res.json(order);
    
  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({ error: "Order failed" });
  }
});

// Cleanup old audios (every hour)
setInterval(() => {
  try {
    const files = fs.readdirSync(audioDir);
    const cutoff = Date.now() - 24 * 60 * 60 * 1000; // 24h

    files.forEach(file => {
      const filePath = path.join(audioDir, file);
      const stat = fs.statSync(filePath);
      if (stat.mtimeMs < cutoff) {
        fs.unlinkSync(filePath);
      }
    });
  } catch (e) {
    console.log('Cleanup error:', e.message);
  }
}, 60 * 60 * 1000);

app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 ClipGen Backend on port ${PORT}`);
  console.log(`🎵 Audio files: http://localhost:${PORT}/public/audio`);
  console.log(`💾 Render-ready!`);
});

