# ClipGen AI UI Premium Polish TODO

**Status:** Plan Ready - Awaiting Approval

**Information Gathered:**
- TailwindCSS app with good base (gradient bg, shadows, hovers)
- Navbar: white shadow (needs glass)
- Hero: excellent base
- Cards: FeatureCard rounded-xl shadow-md, SubscriptionCard rounded-2xl shadow-lg (make consistent)
- Footer: black good
- App.css: Custom design system vars ready

**Detailed Code Update Plan:**

1. **tailwind.config.js** - Extend theme:
   - colors: primary: blue-600 (#2563eb), secondary: purple-500 (#a855f7)
   - fontFamily: { sans: ['Inter', 'ui-sans-serif'] }

2. **src/components/Navbar.jsx** - Glass effect:
   - Replace `bg-white shadow-sm` → `bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200`
   - Menu hover: blue-600
   - Logo gradient blue-600 to purple-500
   - Mobile menu if needed

3. **src/components/FeatureCard.jsx** - Consistent cards:
   - `rounded-xl shadow-md` → `rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200`

4. **src/App.css** - Global animations/utilities:
   - Add `.fade-in-up { animation: fadeInUp 0.6s ease-out; }`
   - `@keyframes fadeInUp`
   - Button hover:scale-105
   - Ensure all cards use .card class

5. **Global consistency:** Search/replace across components:
   - shadow-md → shadow-lg hover:shadow-2xl
   - rounded-xl → rounded-2xl
   - Add transition-all duration-300

**Dependent Files:**
- tailwind.config.js
- src/components/Navbar.jsx
- src/components/FeatureCard.jsx
- src/components/SubscriptionCard.jsx
- src/App.css
- src/index.css (add Inter @import)

**Followup Steps:**
1. `npm run dev` test
2. Check responsive
3. Deploy `npx vercel --prod`

Approve plan or suggest changes?

