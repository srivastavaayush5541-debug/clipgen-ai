# ClipGen AI 🚀

## Quick Start

**Frontend:**
```
npm install
npm run dev
→ http://localhost:5173
```

**Backend:**
```
cd backend
npm install
node server.js
→ http://localhost:5000
```

**Full Stack:**
```
npm run start
```

## APIs

**POST /generate-video**
```
{
  "script": "Your video script",
  "plan": "free|premium|pro"
}
```
Returns: videoUrl, audio, scenes

**POST /create-order**
```
{
  "amount": 249
}
```
Returns: Razorpay order ID

## Render Deploy

**Backend:**
```
Root Directory: backend
Build: npm install
Start: node server.js
Env: RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET
```

**Frontend:**
```
Build: npm run build
Publish: dist
Env: VITE_RAZORPAY_KEY_ID (public key only)
```

## Features
- AI Video Generation (Pollinations + gTTS)
- Razorpay Payments ✅
- Firebase Auth
- Plan limits (Free/Pro)
- Responsive Tailwind UI

**Production Ready!** 🎉
