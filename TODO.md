# AI Video Generator Implementation Plan

**Current Status:**
- Frontend: Hero.jsx (topic input → generate)
- App.jsx: generateVideo → fetch backend
- Backend: GPT script generation ✅

**Missing for Full Video:**
1. Script textarea (100 words)
2. Voice/style dropdowns
3. Backend: scene split → OpenAI images → TTS → FFmpeg video
4. Results: video player + download

**Phase 1 - UI Updates:**
- [ ] Hero.jsx: textarea + voice/style selects
- [ ] App.jsx: Pass voice/style to backend
- [ ] Show results section (video player)

**Phase 2 - Backend Video Pipeline:**
- [ ] Script → 3-5 scenes
- [ ] OpenAI DALL-E images per scene
- [ ] OpenAI TTS audio
- [ ] FFmpeg: images + audio + transitions → MP4
- [ ] Return video URL

**Phase 3 - Polish:**
- [ ] Loading steps
- [ ] Word limit validation
- [ ] Free tier watermark

**Next Step:** Update Hero.jsx UI for script/voice/style

