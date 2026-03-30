import AdBanner from "./AdBanner";
import { useState, useEffect } from 'react';

const Hero = ({ isFreeUser, canGenerate, remaining, plan, onGenerate, script, setScript, voice, setVoice, style, setStyle, isGenerating, setPage }) => {
  const [localScript, setLocalScript] = useState(script);
  
const handleGenerate = () => {
    if (!user || !user.emailVerified) {
      alert('Please login and verify your email first.');
      setPage('login');
      return;
    }
    if (!canGenerate) {
      alert(`Daily limit reached (${plan.remaining || 0} left). Upgrade your plan!`);
      setPage('subscription');
      return;
    }
    onGenerate(localScript, voice, style);
  };

  useEffect(() => {
    setLocalScript(script);
  }, [script]);

  return (
    <section id="home" className="text-center py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Create Viral AI Videos in Seconds 🚀
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Turn your ideas into engaging short videos using cutting-edge AI technology
        </p>

        {/* Remaining Videos Badge */}
        <div className={`mb-8 p-4 rounded-2xl mx-auto max-w-md text-center shadow-lg transition-all ${canGenerate ? 'bg-green-100 border-2 border-green-200' : 'bg-orange-100 border-2 border-orange-300'}`}>
          <div className="font-bold text-xl">{remaining || 0}</div>
          <div className="text-sm capitalize">{plan.plan} plan - Videos left today</div>
          {!canGenerate && (
            <button 
              onClick={() => setPage('subscription')}
              className="mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:scale-105 transition-all"
            >
              Upgrade Now
            </button>
          )}
        </div>

        <div className="mt-12 space-y-4 max-w-2xl mx-auto">
          <textarea 
            rows="4"
            placeholder={`Paste your script (max 100 words for ${plan.planInfo?.duration || 30}s video)...`}
            value={script}
            onChange={(e) => setScript(e.target.value)}
            disabled={isGenerating || !canGenerate}
            className={`w-full px-6 py-4 text-lg border rounded-2xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 shadow-lg transition-all duration-300 bg-white resize-vertical ${!canGenerate ? 'bg-gray-50 cursor-not-allowed border-gray-300' : ''}`}
            maxLength="500"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 items-end">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-sm font-medium text-gray-700">Voice</label>
              <select 
                value={voice}
                onChange={(e) => setVoice(e.target.value)}
                disabled={isGenerating || !canGenerate}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 shadow-lg transition-all bg-white w-full sm:w-32 disabled:bg-gray-50 disabled:cursor-not-allowed"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <label className="text-sm font-medium text-gray-700">Style</label>
              <select 
                value={style}
                onChange={(e) => setStyle(e.target.value)}
                disabled={isGenerating || !canGenerate}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:ring-4 focus:ring-blue-500/20 focus:border-blue-400 shadow-lg transition-all bg-white w-full sm:w-32 disabled:bg-gray-50 disabled:cursor-not-allowed"
              >
                <option value="realistic">Realistic</option>
                <option value="cartoon">Cartoon</option>
              </select>
            </div>
            
            <button 
              className={`flex-1 sm:flex-none px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-xl ${canGenerate ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white hover:scale-105 hover:shadow-2xl' : 'bg-gray-400 text-gray-600 cursor-not-allowed'}`}
              onClick={handleGenerate}
              disabled={isGenerating || !canGenerate}
            >
              {isGenerating ? "🎬 Generating..." : canGenerate ? "🎬 Generate Video" : "Limit Reached"}
            </button>
          </div>
          
          <p className="text-xs text-gray-500 text-right">
            {script.length}/500 characters
          </p>
        </div>

        {isFreeUser && plan.planInfo?.ads && <AdBanner />}
      </div>
    </section>
  );
};

export default Hero;

